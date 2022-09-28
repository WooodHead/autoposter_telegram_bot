import client from '../../utils/clients/graphql-client'
import {
    GetObservablePaymentsDocument,
    GetPaymentByPkDocument,
    InsertNewPaymentDocument,
    UpdateStatusDocument,
} from '../../generated/graphql'
import moment from 'moment'
import AcquiringClient from '../../utils/clients/acquiring-client'
import { stringifyQueryParams } from '../../utils/helpers'
import crypto from 'crypto'

export type FKTransaction = {
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
    private SHOP_ID = parseInt(process.env.FREEKASSA_SHOP_ID)
    private ENDPOINT = 'https://pay.freekassa.ru/'
    private FK_SECRET = process.env.FREEKASSA_SECRET_ONE

    // get payments from database that we have to observer, because we can receive a payment
    public async getObservablePayments() {
        const data = await client.request(GetObservablePaymentsDocument, {
            _gte: moment().add('-1', 'days'),
        })
        return data.auto_poster_bot_payment
    }

    // get orders from Freekassa since last 24 hours
    public async getLatestFKPayments(
        required_payment_ids: number[],
    ): Promise<FKTransaction[]> {
        if (!required_payment_ids.length) return []

        const data = await AcquiringClient.send<GetRegisteredTransactionsRes>(
            '/orders',
            {
                dateFrom: moment()
                    .add('-1', 'days')
                    .format('YYYY-MM-DD HH:mm:ss'),
            },
        )

        const observable_transactions = data.orders.filter((each) =>
            required_payment_ids.includes(parseInt(each.merchant_order_id)),
        )

        return observable_transactions
    }

    public async getPaymentByPK(id: number) {
        const data = await client.request(GetPaymentByPkDocument, { id })
        return data.auto_poster_bot_payment_by_pk
    }

    public async insertPayment(
        amount: number,
        client_id: number,
        post_id?: number,
    ) {
        const data = await client.request(InsertNewPaymentDocument, {
            amount,
            client_id,
            post_id,
        })
        return data.insert_auto_poster_bot_payment_one
    }

    // update payment status in db
    public async updatePaymentStatus(
        id: number,
        status: number,
    ): Promise<void> {
        await client.request(UpdateStatusDocument, { id, status })
    }

    public generatePaymentURL(price: number, payment_id: number): string {
        const url_params = {
            m: this.SHOP_ID,
            oa: price,
            currency: 'RUB',
            o: payment_id.toString(),
        }

        const payload = Object.values({
            shop_id: parseInt(process.env.FREEKASSA_SHOP_ID),
            price,
            secret: this.FK_SECRET,
            currency: 'RUB',
            clientIdentity: payment_id,
        }).join(':')

        const md5_signature = crypto
            .createHash('md5')
            .update(payload)
            .digest('hex')

        const finalURL =
            this.ENDPOINT +
            stringifyQueryParams({
                ...url_params,
                s: md5_signature,
            })

        return finalURL
    }
}
