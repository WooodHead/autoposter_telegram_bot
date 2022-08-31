import { Context, Markup, Scenes } from "telegraf";
import { User } from "../types/user";
import { balanceButtons, balanceKeyboard } from "../utils/keyboards/balance-keyboard";
import { mainKeyboard } from "../utils/keyboards/main-keyboard";
const { leave } = Scenes.Stage;

const balanceScene = new Scenes.BaseScene<Scenes.SceneContext>('BALANCE_SCENE_ID');

balanceScene.enter(ctx => {
    const user = ctx.state.user

    ctx.reply(`Ваш баланс: ${user.balance} ₽`, balanceKeyboard);
});

balanceScene.hears(balanceButtons[0], (ctx: Context) => {
    ctx.reply('Меню', mainKeyboard)
    leave<Scenes.SceneContext>()
})




export default balanceScene