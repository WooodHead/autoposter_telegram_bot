import schedule from 'node-schedule'
import PaymentService from '../services/payment.service/payment.service'

import { bot, EVERY_TEN_SEC_CRON_EPX } from '..'
import { Payment } from '../types'

export default class PaymentObserver {
    /**
     observeble there is a payments with status = 0.
     */
    observable_payments: Payment[] = []

    constructor(private paymentService = new PaymentService()) {
        this.init()
        this.runTaskScheduler()
    }

    private async init() {
        const needObserve = await this.paymentService.getObservablePayments()
        this.add(needObserve)
    }

    private add(new_payments: Payment[]) {
        this.observable_payments.push(...new_payments)
    }

    private remove(payment: Payment) {
        this.observable_payments = this.observable_payments.filter(
            (each) => each.id !== payment.id,
        )
    }

    private async runTaskScheduler() {
        return schedule.scheduleJob(EVERY_TEN_SEC_CRON_EPX, async () => {
            await this.init()

            const FKPayments = await this.paymentService.getLatestFKPayments(
                this.observable_payments.map((each) => each.id),
            )

            console.log(
                'needObserve',
                this.observable_payments.map((each) => each.id),
            )
            console.log(
                'FKPayments',
                FKPayments.map((each) => each.merchant_order_id),
            )

            this.observable_payments.map(async (payment) => {
                const associatedFKPayment = FKPayments.find(
                    (each) => each.merchant_order_id == payment.id.toString(),
                )

                if (!associatedFKPayment) return

                // this means that payment were procesed
                if (associatedFKPayment.status !== 0) {
                    await this.paymentService.updatePaymentStatus(
                        payment.id,
                        associatedFKPayment.status,
                    )

                    this.remove(payment)

                    console.log(`Payment status ${payment} changed. ┌（★ｏ☆）┘`)

                    if (associatedFKPayment.status === 1) {
                        bot.telegram.sendMessage(
                            payment.client_id,
                            'Платеж получен! Спасибо.',
                        )
                    } else {
                        bot.telegram.sendMessage(
                            payment.client_id,
                            'Платеж отклонен.',
                        )
                    }
                }
            })
        })
    }
}
