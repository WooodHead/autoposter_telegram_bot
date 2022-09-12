import { Scenes } from "telegraf"
import UserService from "../services/user-service"
import { MyContext } from "../types/wizard-context"
import { getUserId } from '../utils/get-user-id'
import { balanceButtons, balanceKeyboard } from "../utils/keyboards/balance-keyboard"
import { mainKeyboard } from "../utils/keyboards/main-keyboard"

const balanceScene = new Scenes.BaseScene<MyContext>('balanceScene')

balanceScene.enter(async ctx => {
    const userId = getUserId(ctx)
    const user = await UserService.getUserByPk(userId)
    await ctx.reply(`Ваш баланс: ${user.balance} ₽`, balanceKeyboard)
})

balanceScene.hears(balanceButtons[0], (ctx: MyContext) => {
    ctx.reply('Меню', mainKeyboard)
    ctx.scene.leave()
})


export default balanceScene