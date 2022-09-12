import AcquiringAPI from "../utils/acquiring-api"
import schedule from 'node-schedule'
import PostService from '../services/post-service'
import Post from '../post'

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

type Transaction = {
    post_id: number
    cb: (post_id: number, status: PaymentFullStatus) => void
}

type PaymentFullStatus = 'new' | 'paid' | 'revoked' | 'error'


export default class PaymentNotifier {
    observable_transactions: Transaction[] = []

    constructor () {
        this.init()

        schedule.scheduleJob('*/1 * * * *', () => {
            console.log('observeble transactions:', this.observable_transactions)

            this.observable_transactions.map(async transaction => {
                const status = await this.getTransactionStatus(transaction)

                if (status > 0) {
                    const pn = transaction.post_id
                    this.observable_transactions = this.observable_transactions.filter(each => each.post_id !== pn)

                    this.resolve(transaction, status)
                }
            })
        })
    }

    public register (transaction: Transaction): void {
        this.observable_transactions.push(transaction)
    }

    private async init () {
        const needObserve: Post[] = await PostService.getAwaitingPayment()
        needObserve.map(each => {
            each.registerInPaymentNotificationProcess()
        })
    }

    private async getTransactionStatus (transaction: Transaction): Promise<number> {
        const data = await AcquiringAPI.send<GetRegisteredTransactionsRes>('/orders', {
            paymentId: transaction.post_id.toString()
        })
        console.log('getTransactionDetail ', data)
        const paid_transaction = data.orders.find(each => each.status)

        if (!paid_transaction) return 0
        else return paid_transaction.status
    }



    /**
     *  method calls when we detect that transaction status was changed.
     *  It calls a callback with appropriate stausus word
     * @param transaction 
     * @param status 
     */
    private async resolve (transaction: Transaction, status: number) {
        const pn = transaction.post_id

        switch (status) {
            case 1:
                transaction.cb(pn, 'paid')
            case 8:
                transaction.cb(pn, 'error')
            case 9:
                transaction.cb(pn, 'revoked')
            default:
                throw Error('Unresolved Transaction status (Freekassa)')
        }
    }
}