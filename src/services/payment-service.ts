import { stringifyQueryParams } from "../utils/stringify-query-params"
import crypto from 'crypto'
import UserService from "./user-service"
import Post from '../post'
import { MyContext } from '../types/wizard-context'


export type InternalBalanceRes = {
    user_id?: number
}

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

export default class PaymentService {

    static async payWithInternalBalance (ctx: MyContext, post: Post): Promise<void> {

        try {
            const user = await UserService.getUserByPk(post.client_id)
            if (!user) throw new Error(`client_id is not founded `)

            if (user.balance < post.price) {
                throw Error('User haven`t enought money on the balance')
            }

            await UserService.incrementUserBalance(post.client_id, (-post.price))
            await post.setPaymentStatus('paid')
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

    static async payWithFk (ctx: MyContext, post: Post): Promise<void> {
        try {
            if (!post.id)
                throw Error("Post musb be registered before payment step")
            // const res_post = await AdvertisingPostService.createAdsPost(ctx.scene.session.post)
            // const pay_res = await payment_service.pay(price, id)

            await ctx.reply(registrationCompiteMessage(post.id))
            await ctx.reply(`Ссылка на оплату: ${post.payment_URL}`,)
            // await AdminService.sendPostOnModerationStep(ctx.scene.session.post)

            post.registerInPaymentNotificationProcess()
        } catch (error: any) {
            ctx.reply(registrationFailMessage)
            ctx.reply(JSON.stringify(error.message))
        }
    }

    static generatePaymentURL (price: number, post_id: number): string {
        const endpoint = 'https://pay.freekassa.ru/'

        if (!process.env.FREEKASSA_SHOP_ID || !process.env.FREEKASSA_SHOP_ID)
            throw Error('Freekassa constants must be provided!')

        const url_params = {
            m: parseInt(process.env.FREEKASSA_SHOP_ID),
            oa: price,
            currency: 'RUB',
            o: post_id
        }

        const payload = Object.values({
            shop_id: parseInt(process.env.FREEKASSA_SHOP_ID), price,
            secret: process.env.FREEKASSA_SECRET_ONE,
            currency: 'RUB', post_id
        }).join(':')

        const md5_signature = crypto.createHash('md5').update(payload).digest("hex")

        const finalURL = endpoint + stringifyQueryParams({
            ...url_params,
            s: md5_signature
        })

        return finalURL
    }
}