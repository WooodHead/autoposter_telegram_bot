import { Scenes } from "telegraf"
import { MyContext } from "../types/wizard-context";
import { mainButtons, mainKeyboard } from "../utils/keyboards/main-keyboard";

const homeScene = new Scenes.BaseScene<MyContext>('homeScene');

homeScene.hears(mainButtons[0], ctx => ctx.scene.enter("selectServiceScene"));
homeScene.hears(mainButtons[1], (ctx) => ctx.scene.enter("balanceScene"))
homeScene.hears(mainButtons[2], ctx => ctx.reply("По любому вопросу вы можете написать нашему администратору @ivanchinalex"))

homeScene.on('text', (ctx) => {
    ctx.reply(`🏠 (U・x・U)`, mainKeyboard);
});


export default homeScene