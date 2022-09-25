import { Composer, Markup, Scenes } from "telegraf"
import Chat from "../../chat"
import Post from "../../post"
import PaymentController from '../../services/payment.service/payment.controller'
import PostService from '../../services/post.service/post-service'
import { MyContext } from "../../types"
import { getUser } from '../../utils/get-user-id'
import { ctxHaveText, getCtxPhoto, getCtxText } from '../../utils/helpers'
import { backKeyboard, backKeyboardButton } from "../../utils/keyboards/back-keyboard"
import { mainKeyboard } from "../../utils/keyboards/main-keyboard"
import { selectChatKeyboard } from "../../utils/keyboards/select-chat-keyboard"
import { isValidHttpUrl } from "./helpers"
import { payKeyboard, payKeyboardButtons } from "./keyboars"


const priseListMessage = `
Система скидок действующая в чатах-партнерах:

от 3-х дней скидка 25% 
от 21-го дня скидка 30%
от 30-ти дней скидка 40%

У каждого чата из списка установлена своя цена поста за сутки.
Выберете чат, в котором хотите сделать пост!
`

const generateFinallMessage = (post: Post) => {
    return (
        `
Чат: ${post.chat.name}
Аудитория: ${post.chat.target_audience}
Стоимость размещения: ${post.price} ₽
Срок размещения: ${post.advertising_days} дня
`
    )
}

type PublicationTimes = {
    name: string,
    data: '12' | '14' | '16'
}[]

const publicationTimes: PublicationTimes = [
    {
        data: '12',
        name: '12:00',
    },
    {
        data: '14',
        name: '14:00'
    },
    {
        data: '16',
        name: '16:00'
    }
]

const selectChatStep = new Composer<MyContext>()

const choosePublicationTimeStage = new Composer<MyContext>()

const payStep = new Composer<MyContext>()
// const inputEmailStep = new Composer<MyContext>()

function registerPublicationTimeActions (): void {
    publicationTimes.forEach(each => {

        choosePublicationTimeStage.action(each.data, async (ctx: MyContext) => {
            const publicationHour = parseInt(ctx.callbackQuery?.data!)

            if (!publicationHour) return

            const data = ctx.scene.session

            const post = await new Post(
                data.post_text,
                data.post_photo,
                data.post_keyboard,
                data.advertising_days,
                publicationHour,
                getUser(ctx).id,
                data.chat
            ).insert()

            const msg = generateFinallMessage(post)

            await ctx.reply("Ваш пост собран! Сейчас скину вам на проверку... ヽ( °◇°)ノ")
            await post.sendPostInChat(ctx.session.user.chat_id)

            ctx.scene.session.registered_post = post

            await ctx.reply(msg, payKeyboard)

            ctx.wizard.next()
        })
        choosePublicationTimeStage.on('text', ctx => {
            ctx.wizard.back()
        })
    })
}


function registerChatActions (chatList: Chat[]): void {
    chatList.map(chat => {
        selectChatStep.action(chat.name, async (ctx: MyContext) => {
            ctx.scene.session.chat = chat

            let message = `Пост будет опубликован в канале (чате) <b>${chat.name}</b>`
            message += `\nАудитория <b>${chat.target_audience}</b>`
            message += `\nЦена размещения <b>${chat.per_day_price}</b>₽ за сутки без учата скидки`
            message += `\n\nCколько дней хотите рекламироваться в чате?`
            await ctx.replyWithHTML(message, backKeyboard)

            return ctx.wizard.next()
        })
    })
}


payStep.hears(payKeyboardButtons[0], async ctx => {
    const post = ctx.scene.session.registered_post
    await PaymentController.payWithFk(ctx, post)
    ctx.scene.leave()
})

payStep.hears(payKeyboardButtons[1], async ctx => {
    const post = ctx.scene.session.registered_post
    await PaymentController.payWithInternalBalance(ctx, post)
    ctx.scene.leave()
})

payStep.hears(payKeyboardButtons[2], async ctx => {
    ctx.reply('Меню', mainKeyboard)
    ctx.scene.leave()
})




export const createPostWizard = new Scenes.WizardScene('createPostWizard',
    ...[
        async (ctx: MyContext) => {
            const chats = await PostService.getSalesChatList()
            ctx.reply(priseListMessage, selectChatKeyboard(chats))

            registerChatActions(chats)
            return ctx.wizard.next()
        },

        selectChatStep,

        async (ctx: MyContext) => {
            if (!ctxHaveText(ctx)) return
            const ctxText = getCtxText(ctx)

            if (ctxText === backKeyboardButton) {
                ctx.reply("Menu", mainKeyboard)
                return ctx.scene.leave()
            }

            const advertisingDays = parseInt(ctxText || '')

            if (!advertisingDays) {
                return ctx.reply("Не так, мне нужно число дней.")
            }


            ctx.scene.session.advertising_days = advertisingDays

            ctx.reply('Теперь отправльте боту текст поста!', Markup.removeKeyboard())
            return ctx.wizard.next()
        },

        async (ctx: MyContext) => {
            const ctxText = getCtxText(ctx)

            if (!ctxText || ctxText == '') {
                return ctx.reply('Напишите текст поста!')
            }

            ctx.scene.session.post_text = ctxText

            ctx.reply("🖼 Пришлите картинку к посту (по желанию).", Markup.keyboard(["Пропустить"]).oneTime().resize())
            return ctx.wizard.next()
        },
        async (ctx: MyContext) => {
            const ctxText = getCtxText(ctx)
            const photo = getCtxPhoto(ctx)

            if (photo) {
                ctx.scene.session.post_photo = JSON.stringify(photo)
            }
            if (ctxText && ctxText !== 'Пропустить') {
                return ctx.reply('Это не картинка!')
            }

            let message = "Чтобы добавить URL-кнопку отправьте сообщение в таком формате: 'ТекстКнопки | URL'."
            await ctx.reply(message, Markup.keyboard(["Пропустить"]).oneTime().resize())

            ctx.wizard.next()
        },
        async (ctx: MyContext) => {
            const ctxText = getCtxText(ctx)

            if (!ctxText)
                return ctx.reply("Я жду URL-кнопку в формате 'ТекстКнопки | URL'!")

            if (ctxText !== "Пропустить") {
                const buttonTitle = ctxText.split('|')[0]?.toString().trim()
                const buttonUrl = ctxText.split('|')[1]?.toString().trim()

                if (!isValidHttpUrl(buttonUrl) || !buttonTitle) {
                    return ctx.reply('Неправильная ссылка, она должна быть вормате "ТекстКнопки | https://URL" ')
                }

                ctx.scene.session.post_keyboard = JSON.stringify([[Markup.button.url(buttonTitle, buttonUrl)]])
            }

            await ctx.reply('!', Markup.removeKeyboard())

            ctx.reply("Выберите время публикации", {
                reply_markup: {
                    inline_keyboard: [[
                        Markup.button.callback('12:00', '12'),
                        Markup.button.callback('14:00', '14'),
                        Markup.button.callback('16:00', '16')
                    ]],
                    remove_keyboard: true,
                    one_time_keyboard: true
                }
            })

            registerPublicationTimeActions()

            return ctx.wizard.next()
        },
        choosePublicationTimeStage,

        payStep
    ]
)


createPostWizard.command('start', ctx => {
    ctx.scene.leave()
    ctx.reply('🏠', mainKeyboard)
})

