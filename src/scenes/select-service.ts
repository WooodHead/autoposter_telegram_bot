import { Scenes } from "telegraf";
import { MyContext } from "../types/wizard-context";
import { mainKeyboard } from "../utils/keyboards/main-keyboard";
import { serviceTypeButtons, ServiceTypeKeyboard } from "../utils/keyboards/service-type-keyboard";


const selectService = new Scenes.BaseScene<MyContext>('selectServiceScene');

selectService.enter(async ctx => {
    ctx.reply(`Мы продаем услуги по рекламе в наших пабликах. Выберете желаемую услугу`, ServiceTypeKeyboard);
});


selectService.hears(serviceTypeButtons[0], async (ctx) => {
    ctx.scene.enter('createPostWizard')
})

selectService.hears(serviceTypeButtons[1], (ctx: MyContext) => {
    ctx.reply(`Опишите подробнее ваш эфир: целевую аудиторию, тему, желаемоe время. 
Наш менеджер свяжется с вами по данному вопросу, и уточнит цену.`)
})

selectService.hears(serviceTypeButtons[2], ctx => {
    ctx.reply('Меню', mainKeyboard)
    ctx.scene.leave()
})

selectService.on('text', ctx => {
    ctx.reply('Меню', mainKeyboard)
    ctx.scene.leave()
})



export default selectService