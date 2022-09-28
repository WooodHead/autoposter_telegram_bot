import { Scenes } from 'telegraf'
import { MyContext } from '../types'
import { mainButtons, mainKeyboard } from '../utils/keyboards/main-keyboard'

const homeScene = new Scenes.BaseScene<MyContext>('homeScene')

homeScene.hears(mainButtons[0], (ctx) => ctx.scene.enter('selectServiceScene'))
homeScene.hears(mainButtons[1], (ctx) => ctx.scene.enter('balanceScene'))
homeScene.hears(mainButtons[2], async (ctx, next) => {
    // const username = await ctx.ask('what your name?')
    // if (username === null) {
    //     return next()
    // }

    ctx.reply(
        `По любому вопросу вы можете написать нашему администратору @ivanchinalex`,
    )
    // next()
})

homeScene.on('text', (ctx) => {
    ctx.reply(`🏠`, mainKeyboard)
})

export default homeScene
