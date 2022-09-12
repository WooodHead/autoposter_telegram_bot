import 'reflect-metadata'
import * as dotenv from 'dotenv'
dotenv.config()

import { Telegraf } from 'telegraf'
import balanceScene from './scenes/balance'
import { authenticate } from './middlewares/authenticate'
import { Scenes } from 'telegraf'
const LocalSession = require('telegraf-session-local')
import selectService from './scenes/select-service'
import { createPostWizard } from './scenes/create-post/create-post'

import { MyContext } from './types/wizard-context'
import homeScene from './scenes/home'
import PaymentNotifier from './jobs/payment-notifier'

import { restrictInChat } from './middlewares/restrict-inchat'

import schedule from 'node-schedule'
import PostPublishing from './jobs/post-publishing'
import moment from 'moment'



const token = process.env.BOT_TOKEN
if (token === undefined) {
    throw new Error('BOT_TOKEN must be provided!')
}

export const bot = new Telegraf<MyContext>(token)
export const paymentNotifier = new PaymentNotifier()
const ppp = new PostPublishing()



const stage = new Scenes.Stage<MyContext>([
    homeScene, balanceScene, selectService, createPostWizard],
    { default: 'homeScene' }
)

bot.use((new LocalSession({ database: 'example_db.json', })).middleware())
bot.use(restrictInChat)
bot.use(authenticate)
bot.use(stage.middleware())


bot.launch()


process.on('SIGINT', function () {
    schedule.gracefulShutdown()
        .then(() => process.exit(0))
})

