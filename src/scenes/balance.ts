import { Scenes } from 'telegraf'
import PaymentController from '../services/payment.service/payment.controller'
import UserService, {
    UserNotRegisteredError,
} from '../services/user.service/user-service'
import { MyContext } from '../types'
import { getUserId } from '../utils/telegraf/get-user-id'
import {
    balanceButtons,
    balanceKeyboard,
} from '../utils/keyboards/balance-keyboard'
import { mainKeyboard } from '../utils/keyboards/main-keyboard'

const balanceScene = new Scenes.BaseScene<MyContext>('balanceScene')

balanceScene.enter(async (ctx) => {
    const userId = getUserId(ctx)
    const user = await UserService.getUserByPk(userId)

    if (user instanceof UserNotRegisteredError) {
        return console.error('user not exist ')
    }

    await ctx.reply(`Ваш баланс: ${user.balance} ₽`, balanceKeyboard)
})

balanceScene.hears(balanceButtons[0], (ctx: MyContext) => {
    ctx.reply('Меню', mainKeyboard)
    ctx.scene.leave()
})

balanceScene.hears(balanceButtons[1], (ctx) => {
    ctx.sendMessage('Введите сумму пополнения')
})

balanceScene.on('text', async (ctx) => {
    new PaymentController().topUpInternalBalance(ctx)
    ctx.scene.leave()
})

export default balanceScene
