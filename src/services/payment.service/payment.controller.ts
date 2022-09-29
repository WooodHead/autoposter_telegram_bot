import UserService from '../user.service/user-service'
import Post from '../../post'
import { MyContext } from '../../types'
import schedule from 'node-schedule'
import PaymentService from './payment.service'
import { getCtxText } from '../../utils/helpers'
import { Markup } from 'telegraf'

import PostService from '../post.service/post-service'
import { EVERY_TEN_SEC_CRON_EPX } from '../..'
import { getUserId } from '../../utils/telegraf/get-user-id'

const registrationFailMessage = `
По какой-то технической причине я не смог зарегестрировать заявку. 
Пожалуйста, сообщите о проблеме владельце бота.
`

export const registrationCompiteMessage = (post_id: number) => `
Спасибо! Заявка зарегестрирована под номером  ${post_id}.
У вас есть 30 минут, чтобы оплатить.
Если ваш пост пройдет модерацию, он опубликуется в чате, и я пришлю вам уведомление.
`

const paymentSuccessMess = (post_id: number) =>
    `Поступила оплата по вашему заказу ${post_id}! Мы отправили его на модерацию.`

export default class PaymentController {
    constructor(private paymentService = new PaymentService()) {}
    private async registerPayment(
        amount: number,
        user_id: number,
        post_id: number,
    ) {
        const registered_payment = await this.paymentService.insertPayment(
            amount,
            user_id,
            post_id,
        )
        await PostService.addPaymentId(post_id, registered_payment?.id)
        return registered_payment
    }

    public async payWithInternalBalance(
        ctx: MyContext,
        post: Post,
    ): Promise<void> {
        try {
            const user = await UserService.getUserByPk(post.client_id)
            if (user instanceof Error)
                throw new Error(`client_id is not founded `)

            if (user.balance < post.price) {
                throw Error('User haven`t enought money on the balance')
            }

            const registered_payment = await this.registerPayment(
                post.price,
                post.client_id,
                post.id,
            )
            this.paymentService.updatePaymentStatus(registered_payment?.id, 1)

            await UserService.decreaseUserBalance(post.client_id, post.price)

            await post.sendOnModerationStep()

            ctx.reply(paymentSuccessMess(post.id))
        } catch (error) {
            if (error.message === 'User haven`t enought money on the balance') {
                ctx.reply('Недостаточно средств на балансе!')
            } else {
                ctx.reply(registrationFailMessage)
            }

            console.log(error)
        }
    }

    public async payWithFk(ctx: MyContext, post: Post): Promise<void> {
        try {
            await ctx.reply(registrationCompiteMessage(post.id))
            const client_id = post.client_id

            const registered_payment = await this.registerPayment(
                post.price,
                client_id,
                post.id,
            )

            const payment_URL = this.paymentService.generatePaymentURL(
                post.price,
                registered_payment?.id,
            )
            await ctx.reply(`Ссылка на оплату: ${payment_URL}`)

            // Следующее событие выполнится когда PaymentObserver обработает платеж
            const job = schedule.scheduleJob(
                EVERY_TEN_SEC_CRON_EPX,
                async () => {
                    const payment = await this.paymentService.getPaymentByPK(
                        registered_payment?.id,
                    )

                    if (payment?.status === 1) {
                        await post.paymentСonfirmed()
                        job.cancel()
                    } else if (payment.status > 1) {
                        job.cancel()
                    }
                },
            )
        } catch (error) {
            ctx.reply(registrationFailMessage)
            ctx.reply(JSON.stringify(error.message))
        }
    }

    public async topUpInternalBalance(ctx: MyContext) {
        const ctxText = getCtxText(ctx)

        if (!ctxText) {
            return ctx.scene.leave()
        }

        const payAmount = parseInt(ctxText)
        const client_id = getUserId(ctx)

        // register payment in your database
        const registered_payment = await this.paymentService.insertPayment(
            payAmount,
            client_id,
        )

        const payment_URL = this.paymentService.generatePaymentURL(
            payAmount,
            registered_payment?.id,
        )

        ctx.reply(
            `Пополнение баланса на ${payAmount}₽`,
            Markup.inlineKeyboard([Markup.button.url('Оплатить', payment_URL)]),
        )

        // post.registerInPaymentNotificationProcess()
        const job = schedule.scheduleJob(EVERY_TEN_SEC_CRON_EPX, async () => {
            const payment = await this.paymentService.getPaymentByPK(
                registered_payment?.id,
            )

            if (payment?.status === 1) {
                const user = await UserService.incrementUserBalance(
                    client_id,
                    payAmount,
                )
                ctx.reply(`Платеж подтвержден. Ваш баланс ${user?.balance}`)
                job.cancel()
            }
        })
    }
}
