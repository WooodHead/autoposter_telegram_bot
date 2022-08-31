import { Context, Markup, Scenes } from "telegraf";
import AdvertisingChatService from "../services/ads-chat-service";
import { mainKeyboard } from "../utils/keyboards/main-keyboard";
import { selectAdsChatKeyboard } from "../utils/keyboards/select-ads-chat";
import { serviceTypeButtons, ServiceTypeKeyboard } from "../utils/keyboards/service-type-keyboard";
const { leave } = Scenes.Stage;

const serviceType = new Scenes.BaseScene<Scenes.SceneContext>('SERVICE_TYPE_ID');

serviceType.enter(async ctx => {
    ctx.reply(`Мы продаем услуги по рекламе в наших пабликах. Выберете желаемую услугу`, ServiceTypeKeyboard);
});


serviceType.hears(serviceTypeButtons[0], async (ctx) => {
    // const chats = (await AdvertisingChatService.getChats()).auto_poster_bot_advertising_chat

    // chats.map(each => {
    //     serviceType.action(each.name, async ctx => {
    //         const message = `Чат: ${each.name} \n Aудитория: ${each.description}`
    //         await ctx.reply(message)
    //         ctx.scene.enter("orderAdsPostWizard")
    //     })
    // })

    // const message = `
    // Прайс лист на рекламный пост в чатах-партнерах:

    // 1 день - 250₽
    // от 3-х дней скидка 25%   - 562 ₽
    // от 21-го дня скидка 30%  - 1225 ₽    
    // от 30-ти дней скидка 40% - 4500 ₽

    // Выберете из списка желаемый чат для рекламы`
    // ctx.reply(message, selectAdsChatKeyboard(chats))
    ctx.scene.enter('orderAdsPostWizard')
})

serviceType.hears(serviceTypeButtons[1], (ctx: Context) => {

    ctx.reply(`Опишите подробнее ваш эфир: целевую аудиторию, тему, желаемоe время. 
Наш менеджер свяжется с вами по данному вопросу, и уточнит цену.`)
})



serviceType.hears(serviceTypeButtons[2], ctx => {
    ctx.reply('Меню', mainKeyboard)
    leave<Scenes.SceneContext>()
})




export default serviceType