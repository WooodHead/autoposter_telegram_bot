import schedule from 'node-schedule'
import PaymentService from '../services/payment.service/payment.service'
import { Auto_Poster_Bot_Payment } from '../generated/graphql'
import { bot, EVERY_TEN_SEC_CRON_EPX } from '..'

export default class PaymentObserver {
    /**
     observeble there is a payments with status = 0.
     */
    observable_payments: Auto_Poster_Bot_Payment[] = []

    constructor(private paymentService = new PaymentService()) {
        this.init()
        this.runTaskScheduler()
    }

    private async init() {
        const needObserve = await this.paymentService.getObservablePayments()
        this.observable_payments = needObserve
    }

    private async runTaskScheduler() {
        return schedule.scheduleJob(EVERY_TEN_SEC_CRON_EPX, async () => {
            await this.init()

            const FKPayments = await this.paymentService.getLatestFKPayments(
                this.observable_payments.map((each) => each.id),
            )

            this.observable_payments.map(async (payment) => {
                const FKPayment = FKPayments.find(
                    (each) => each.merchant_order_id == payment.toString(),
                )

                if (!FKPayment) return

                if (FKPayment.status > 0) {
                    this.observable_payments = this.observable_payments.filter(
                        (id) => id.toString() !== FKPayment.merchant_order_id,
                    )
                    this.paymentService.updatePaymentStatus(
                        payment.id,
                        FKPayment.status,
                    )

                    console.log(
                        `Payment statsus ${payment} changed. ┌（★ｏ☆）┘`,
                    )
                } else if (FKPayment.status === 1) {
                    bot.telegram.sendMessage(
                        payment.client_id,
                        'Платеж получен! Спасибо.',
                    )
                } else
                    bot.telegram.sendMessage(
                        payment.client_id,
                        'Платеж отклонен.',
                    )
            })
        })
    }
}
