import { client } from '../..'
import { GetObservablePaymentsDocument, GetPaymentByPkDocument, InsertNewPaymentDocument, UpdateStatusDocument } from '../../generated/graphql'
import moment from 'moment'
import AcquiringAPI from '../../utils/acquiring-api'
import { stringifyQueryParams } from "../../utils/helpers"
import crypto from 'crypto'

type FKTransaction = {
    merchant_order_id: string
    fk_order_id: number
    amount: number
    currency: 'RUB'
    email: string
    date: string
    status: 0 | 1 | 8 | 9
    commission: number
}

type GetRegisteredTransactionsRes = {
    orders: FKTransaction[]
    page: number
}



export default class PaymentService {

    public static async getLatestFKPayments (required_payment_ids: number[]): Promise<FKTransaction[]> {
        if (!required_payment_ids.length) return []

        const data = await AcquiringAPI.send<GetRegisteredTransactionsRes>('/orders', {
            dateFrom: moment().add('-1', 'days').format('YYYY-MM-DD HH:mm:ss')
        })

        const observable_transactions = data.orders.filter(each =>
            required_payment_ids.includes(parseInt(each.merchant_order_id))
        )

        return observable_transactions

    }

    public static async getPaymentByPK (id: number) {
        const data = await client.request(GetPaymentByPkDocument, { id })
        return data.auto_poster_bot_payment_by_pk
    }

    public static async insertPayment (amount: number, client_id: number, post_id?: number) {
        const data = await client.request(InsertNewPaymentDocument, { amount, client_id, post_id })
        return data.insert_auto_poster_bot_payment_one
    }

    public static async getObservablePayments () {
        const data = await client.request(GetObservablePaymentsDocument, { _gte: moment().add('-1', 'days') })
        return data.auto_poster_bot_payment
    }

    public static async updatePaymentStatus (id: number, status: number): Promise<void> {
        await client.request(UpdateStatusDocument, { id, status })
    }

    public static generatePaymentURL (price: number, payment_id: number): string {
        const ENDPOINT = 'https://pay.freekassa.ru/'

        const url_params = {
            m: parseInt(process.env.FREEKASSA_SHOP_ID!),
            oa: price,
            currency: 'RUB',
            o: payment_id.toString()
        }

        const payload = Object.values({
            shop_id: parseInt(process.env.FREEKASSA_SHOP_ID!), price,
            secret: process.env.FREEKASSA_SECRET_ONE,
            currency: 'RUB', clientIdentity: payment_id
        }).join(':')

        const md5_signature = crypto.createHash('md5').update(payload).digest("hex")

        const finalURL = ENDPOINT + stringifyQueryParams({
            ...url_params,
            s: md5_signature
        })

        return finalURL
    }
}