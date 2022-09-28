import { Markup } from 'telegraf'
import Post from '../../post'
import PaymentController from '../../services/payment.service/payment.controller'
import PostService from '../../services/post.service/post-service'
import { MyContext } from '../../types'
import { getCtxPhoto, getCtxText } from '../../utils/helpers'
import { getUser } from '../../utils/telegraf/get-user-id'

import QuestionReplyScene, {
    IQuestionReplySceneConstructor,
} from '../../utils/telegraf/question-reply-scene'
import { isValidHttpUrl } from './helpers'
import { payKeyboard, payKeyboardButtons } from './keyboars'

const p_controller = new PaymentController()
const priseListMessage = `
Система скидок действующая в чатах-партнерах:

от 3-х дней скидка 25% 
от 21-го дня скидка 30%
от 30-ти дней скидка 40%

У каждого чата из списка установлена своя цена поста за сутки.
Выберете чат, в котором хотите сделать пост!
`

const generateFinallMessage = (post: Post) => {
    return `
Чат: ${post.chat.name}
Аудитория: ${post.chat.target_audience}
Стоимость размещения: ${post.price} ₽
Срок размещения: ${post.advertising_days} дня
`
}

type PublicationTimes = {
    name: string
    data: '12' | '14' | '16'
}[]

const publicationTimes: PublicationTimes = [
    {
        data: '12',
        name: '12:00',
    },
    {
        data: '14',
        name: '14:00',
    },
    {
        data: '16',
        name: '16:00',
    },
]

const skipButton = 'Пропустить'
const skipKeyboard = Markup.keyboard([skipButton]).oneTime().resize()

const scenes: IQuestionReplySceneConstructor = [
    {
        scene_id: 'enter',
        async enter(ctx) {
            const sales_chat_list = await PostService.getSalesChatList()

            const buttons = sales_chat_list.map((each) => {
                return [Markup.button.callback(each.name, each.name)]
            })

            ctx.reply(priseListMessage, Markup.inlineKeyboard([...buttons]))
        },

        async actions(scene, next) {
            const sales_chat_list = await PostService.getSalesChatList()

            for (const chat of sales_chat_list) {
                scene.action(chat.name, async (ctx: MyContext) => {
                    ctx.session.post = {}

                    ctx.session.post.chat = chat

                    let message = `Пост будет опубликован в канале (чате) <b>${chat.name}</b>`
                    message += `\nАудитория <b>${chat.target_audience}</b>`
                    message += `\nЦена размещения <b>${chat.per_day_price}</b>₽ за сутки без учата скидки`
                    // message += `\n\nCколько дней хотите рекламироваться в чате?`
                    await ctx.replyWithHTML(message)

                    next(ctx)
                })
            }

            scene.on('text', (ctx) => {
                ctx.reply('Выберете чат!')
            })
        },
    },

    {
        scene_id: 'input-days',
        enter(ctx) {
            ctx.reply('Cколько дней хотите рекламироваться в чате?')
        },
        actions(scene, next) {
            scene.on('text', (ctx) => {
                const advertisingDays = parseInt(getCtxText(ctx))
                if (advertisingDays) {
                    ctx.session.post.advertising_days = advertisingDays
                    return next(ctx)
                } else {
                    ctx.reply('Не так! Мне нужно число дней')
                }
            })
        },
    },
    {
        scene_id: 'input-post-text',
        enter(ctx) {
            ctx.reply('Теперь отправьте боту текст поста!')
        },
        actions(scene, next) {
            scene.on('text', (ctx) => {
                const postText = getCtxText(ctx)
                ctx.session.post.post_text = postText
                return next(ctx)
            })
            scene.on('photo', (ctx) => {
                ctx.reply('Сначала текст, а потом все остальное!')
            })
        },
    },

    {
        scene_id: 'input-post-photo',
        enter(ctx) {
            ctx.reply('Прикрепить картинку к посту (по желанию).', skipKeyboard)
        },
        actions(scene, next) {
            scene.on('text', (ctx) => {
                if (getCtxText(ctx) === skipButton) {
                    return next(ctx)
                }
                ctx.reply('Это не картинка!')
            })
            scene.on('photo', (ctx) => {
                const photo = getCtxPhoto(ctx)
                ctx.session.post.post_photo = JSON.stringify(photo)
                return next(ctx)
            })
        },
    },

    {
        scene_id: 'input-post-link',
        enter(ctx) {
            ctx.reply(
                "Чтобы добавить URL-кнопку отправьте сообщение в таком формате: 'ТекстКнопки | URL'",
                skipKeyboard,
            )
        },
        actions(scene, next) {
            scene.on('text', (ctx) => {
                const ctxText = getCtxText(ctx)

                if (ctxText === skipButton) {
                    return next(ctx)
                }

                const buttonTitle = ctxText.split('|')[0]?.toString().trim()
                const buttonUrl = ctxText.split('|')[1]?.toString().trim()

                if (!isValidHttpUrl(buttonUrl) || !buttonTitle) {
                    return ctx.reply(
                        'Неправильная ссылка, она должна быть вормате "ТекстКнопки | https://URL" ',
                    )
                }
                ctx.session.post.post_keyboard = JSON.stringify([
                    [Markup.button.url(buttonTitle, buttonUrl)],
                ])
                next(ctx)
            })
        },
    },

    {
        scene_id: 'input-post-publication-time',
        enter(ctx) {
            ctx.reply('Выберите время публикации', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            Markup.button.callback('12:00', '12'),
                            Markup.button.callback('14:00', '14'),
                            Markup.button.callback('16:00', '16'),
                        ],
                    ],
                    remove_keyboard: true,
                    one_time_keyboard: true,
                },
            })
        },
        actions(scene, next) {
            publicationTimes.forEach((each) => {
                scene.action(each.data, async (ctx: MyContext) => {
                    const publicationHour = parseInt(ctx.callbackQuery?.data)
                    // console.log(ctx.session.post)
                    if (!publicationHour)
                        throw Error('unknown-post-publication-hour')

                    const {
                        post_text,
                        post_photo,
                        post_keyboard,
                        advertising_days,
                        chat,
                    } = ctx.session.post

                    const registered_post = await new Post(
                        post_text,
                        post_photo,
                        post_keyboard,
                        advertising_days,
                        publicationHour,
                        getUser(ctx).id,
                        chat,
                    ).insert()

                    const msg = generateFinallMessage(registered_post)

                    await ctx.reply('Так будет выглядеть ваш пост!')
                    await registered_post.sendPostInChat(
                        ctx.session.user.chat_id,
                    )

                    ctx.session.post.registered_post = registered_post
                    // console.log(registered_post)
                    await ctx.reply(msg, payKeyboard)
                    next(ctx)
                })

                scene.on('text', (ctx) => {
                    ctx.reply('Выберете время публикации!')
                })
            })
        },
    },

    {
        scene_id: 'post-payment',
        enter(ctx) {
            ctx.reply('Выберете способ оплаты', payKeyboard)
        },
        async actions(scene, next) {
            scene.on('text', async (ctx) => {
                const ctxText = getCtxText(ctx)

                const { registered_post } = ctx.session.post

                if (ctxText === payKeyboardButtons[0])
                    await p_controller.payWithFk(ctx, registered_post)
                else if (ctxText === payKeyboardButtons[1])
                    await p_controller.payWithInternalBalance(
                        ctx,
                        registered_post,
                    )
                else ctx.scene.enter('homeScene')
                return next(ctx)
            })
        },
    },
]

export const createPostScenes = new QuestionReplyScene('create-post.', scenes)
    .scenes
