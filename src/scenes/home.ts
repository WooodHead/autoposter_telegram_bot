import { Scenes } from 'telegraf'
import { MyContext } from '../types'
import { mainButtons, mainKeyboard } from '../utils/keyboards/main-keyboard'

const homeScene = new Scenes.BaseScene<MyContext>('homeScene')
    .enter((ctx) => ctx.reply(`🏠`, mainKeyboard))

    .hears(mainButtons[0], (ctx) => ctx.scene.enter('selectServiceScene'))
    .hears(mainButtons[1], (ctx) => ctx.scene.enter('balanceScene'))
    .hears(mainButtons[2], async (ctx) => {
        ctx.reply(
            `По любому вопросу вы можете написать нашему администратору @ivanchinalex`,
        )
    })

export default homeScene
