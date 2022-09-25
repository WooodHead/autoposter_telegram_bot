import * as dotenv from 'dotenv'
import 'reflect-metadata'
dotenv.config()

import { Scenes, Telegraf } from 'telegraf'
import LocalSession from 'telegraf-session-local'
import { authenticate } from './middlewares/authenticate'
import balanceScene from './scenes/balance'
import { createPostWizard } from './scenes/create-post/create-post'
import selectService from './scenes/select-service'

import { GraphQLClient } from 'graphql-request'
import schedule from 'node-schedule'
import PaymentObserver from './jobs/payment-observer'
import PostPublishing from './jobs/post-publishing'
import { restrictInChat } from './middlewares/restrict-inchat'
import homeScene from './scenes/home'
import { type MyContext } from './types'

export const EVERY_TEN_SEC_CRON_EPX = '*/10 * * * * *'
export const EVERY_THIRTY_SEC_CRON_EPX = '*/30 * * * * *'

const token = process.env.BOT_TOKEN
if (token === undefined) {
    throw new Error('BOT_TOKEN must be provided!')
}

export const client = new GraphQLClient(process.env.HASURA_ENDPOINT, {
    headers: {
        'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
    },
})

export const bot = new Telegraf<MyContext>(token)

new PaymentObserver()
new PostPublishing()

const stage = new Scenes.Stage<MyContext>(
    [homeScene, balanceScene, selectService, createPostWizard],
    { default: 'homeScene' },
)

bot.use(new LocalSession({ database: 'session.json' }).middleware())
bot.use(restrictInChat)
bot.use(authenticate)
bot.use(stage.middleware())

bot.launch()

process.on('SIGINT', function () {
    schedule.gracefulShutdown().then(() => process.exit(0))
})
