import UserService from "../user.service/user-service"
import Post from '../../post'
import { MyContext } from '../../types/wizard-context'
import schedule from 'node-schedule'
import PaymentService from './payment.service'
import { getCtxText } from '../../utils/helpers'
import { Markup } from 'telegraf'
import { getUserId } from '../../utils/get-user-id'
import PostService from '../post.service/post-service'


const registrationFailMessage = (`
По какой-то технической причине я не смог зарегестрировать заявку. 
Пожалуйста, сообщите о проблеме владельце бота.
`)

export const registrationCompiteMessage = (post_id: number) => (`
Спасибо! Заявка зарегестрирована под номером  ${post_id}.
У вас есть 30 минут, чтобы оплатить.
Если ваш пост пройдет модерацию, он опубликуется в чате, и я пришлю вам уведомление.
`)


const paymentSuccessMess = (post_id: number) => `Поступила оплата по вашему заказу ${post_id}! Мы отправили его на модерацию.`


export default class PaymentController {

    private static async registerPayment (amount: number, user_id: number, post_id: number) {
        const registered_payment = await PaymentService.insertPayment(amount, user_id, post_id)
        await PostService.addPaymentId(post_id, registered_payment?.id!)
        return registered_payment
    }

    public static async payWithInternalBalance (ctx: MyContext, post: Post): Promise<void> {
        try {
            const user = await UserService.getUserByPk(post.client_id)
            if (!user) throw new Error(`client_id is not founded `)

            if (user.balance < post.price) {
                throw Error('User haven`t enought money on the balance')
            }

            const registered_payment = await this.registerPayment(post.price, post.client_id!, post.id!)
            PaymentService.updatePaymentStatus(registered_payment?.id!, 1)

            await UserService.decreaseUserBalance(post.client_id, post.price)

            await post.sendOnModerationStep()

            ctx.reply(paymentSuccessMess(post.id!))

        } catch (error: any) {
            if (error.message === "User haven`t enought money on the balance") {
                ctx.reply("Недостаточно средств на балансе!")
            } else {
                ctx.reply(registrationFailMessage)
            }

            console.log(error)
        }
    }

    public static async payWithFk (ctx: MyContext, post: Post): Promise<void> {
        try {
            await ctx.reply(registrationCompiteMessage(post.id!))
            const client_id = post.client_id


            const registered_payment = await this.registerPayment(post.price, client_id, post.id!)

            const payment_URL = PaymentService.generatePaymentURL(post.price, registered_payment?.id!)
            await ctx.reply(`Ссылка на оплату: ${payment_URL}`,)

            // Следующее событие выполнится когда PaymentObserver обработает платеж
            const job = schedule.scheduleJob('*/1 * * * *', async () => {
                const payment = await PaymentService.getPaymentByPK(registered_payment?.id!)

                if (payment?.status === 1) {
                    await post.paymentСonfirmed()
                    job.cancel()
                }
                else if (payment!.status > 1) {
                    job.cancel()
                }

            })

        } catch (error: any) {
            ctx.reply(registrationFailMessage)
            ctx.reply(JSON.stringify(error.message))
        }
    }

    public static async topUpInternalBalance (ctx: MyContext) {
        const ctxText = getCtxText(ctx)

        if (!ctxText) {
            return ctx.scene.leave()
        }

        const payAmount = parseInt(ctxText)
        const client_id = getUserId(ctx)

        // register payment in your database
        const registered_payment = await PaymentService.insertPayment(payAmount, client_id)

        const payment_URL = PaymentService.generatePaymentURL(payAmount, registered_payment?.id!)

        ctx.reply(`Пополнение баланса на ${payAmount}₽`,
            Markup.inlineKeyboard([Markup.button.url('Оплатить', payment_URL)])
        )

        // post.registerInPaymentNotificationProcess()
        const job = schedule.scheduleJob('*/10 * * * * *', async () => {
            const payment = await PaymentService.getPaymentByPK(registered_payment?.id!)

            if (payment?.status === 1) {
                const user = await UserService.incrementUserBalance(client_id, payAmount)
                ctx.reply(`Платеж подтвержден. Ваш баланс ${user?.balance}`)
                job.cancel()
            }
        })


    }

}