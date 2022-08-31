import { Composer, Scenes } from "telegraf";
import AdvertisingChatService from "../../services/ads-chat-service";
import AdvertisingPostService from "../../services/ads-post-service";
import { AdsChat } from "../../types/ads-chat";
import { backKeyboard, backKeyboardButton } from "../../utils/keyboards/back-keyboard";
import { mainKeyboard } from "../../utils/keyboards/main-keyboard";
import { selectAdsChatKeyboard } from "../../utils/keyboards/select-ads-chat";
import { calculatePrice } from "./helpers";
import { payKeyboard, payKeyboardButtons } from "./keyboars";
import { generateFinallMessage, priseListMessage } from "./messages";

interface MyWizardSession extends Scenes.WizardSessionData {
    // will be available under `ctx.scene.session.myWizardSessionProp`
    advertising_days: number
    chat: AdsChat

}

type MyContext = Scenes.WizardContext<MyWizardSession>

const stepHandlerOne = new Composer<MyContext>()


stepHandlerOne.on('text', (ctx: any) => {
    return ctx.wizard.next()
});

const payStep = new Composer<MyContext>()

payStep.hears(payKeyboardButtons[0], ctx => {

    // AdvertisingPostService.createAdsPost
    ctx.reply("Ссылка на оплату")
})

payStep.hears(payKeyboardButtons[1], ctx => {
    ctx.scene.leave()
})



export const orderAdsPostWizard = new Scenes.WizardScene('orderAdsPostWizard',
    ...[
        async (ctx) => {
            const chats = (await AdvertisingChatService.getChats()).auto_poster_bot_advertising_chat
            ctx.reply(priseListMessage, selectAdsChatKeyboard(chats))

            chats.map(each => {
                stepHandlerOne.action(each.name, async ctx => {
                    ctx.scene.session.chat = {
                        chat_id: each.chat_id,
                        description: each.description,
                        name: each.name,
                        per_day_price: 250
                    }

                    const message = `Чат: ${each.name} \n Aудитория: ${each.description}`
                    await ctx.reply(message)
                    ctx.reply('Введите сколько дней вы хотите рекламироваться в чате! ヾ(=^▽^=)ノ!');

                    return ctx.wizard.next();
                })
            })

            return ctx.wizard.next();
        },
        stepHandlerOne,
        (ctx) => {
            const advertisingDays: number = parseInt(ctx.message.text)
            ctx.scene.session.advertising_days = advertisingDays

            ctx.reply('Вставьте пост!')
            return ctx.wizard.next();
        },
        async (ctx) => {
            const advertisingDays = ctx.scene.session.advertising_days
            const postMessage: string = ctx.message.text
            const chat: AdsChat = ctx.scene.session.chat

            const msg = generateFinallMessage({ chat, advertisingDays, postMessage, prise: calculatePrice(advertisingDays) })
            ctx.reply(msg, payKeyboard)
            return ctx.scene.leave();
        },
    ]
);


