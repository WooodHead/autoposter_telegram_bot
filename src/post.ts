import { bot } from "."

import Chat from "./chat"
import PostService from "./services/post.service/post-service"
import UserService from "./services/user.service/user-service"

import schedule from 'node-schedule'
import { plainToInstance, Type } from 'class-transformer'
import Admin from './admin'
import moment from 'moment'


type IPostObject = {
    advertising_chat_id: number
    advertising_days: number
    client_id: number
    id: number
    // payment_status: PaymentFullStatus
    payment_id: number
    keyboard: string
    passed_moderation: boolean
    photo: string
    price: number
    publication_end_date: moment.Moment
    publication_start_date: moment.Moment
    text: string
    publication_hour: number
    chat: {
        id: number
        name: string
        per_day_price: number
        target_audience: string
    }
}

export default class Post {
    id?: number
    payment_id?: number
    price: number
    publication_start_date?: moment.Moment
    publication_end_date?: moment.Moment

    @Type(() => Chat)
    chat: Chat

    constructor (
        public text: string,
        public photo: string | undefined | null,
        public keyboard: string | undefined | null,
        public advertising_days: number,
        public publication_hour: number,
        public client_id: number,

        chat: Chat,
    ) {
        this.chat = chat
        this.price = this.calculatePrice()
    }

    static from (object: IPostObject) {
        const chat = plainToInstance(Chat, object.chat)

        const post = new Post(
            object.text,
            object.photo,
            object.keyboard,
            object.advertising_days,
            object.publication_hour,
            object.client_id,
            chat
        )

        post.id = object.id
        post.publication_start_date = moment(object.publication_start_date!)
        post.publication_end_date = moment(object.publication_end_date!)
        return post
    }

    public async insert (): Promise<this> {
        this.id = await PostService.createPost(this)
        return this
    }

    /**
     *  Post registration (i.e sends on moderation step)
     */
    public async sendOnModerationStep () {
        Admin.sendPostOnModeration(this)
    }

    public async paymentСonfirmed () {
        const post = this
        if (!post.id) throw Error('Post ID must be implemented')

        post.sendMessageToPostOwner(`Поступила оплата по вашему заказу ${post.id}! Мы отправили его на модерацию.`)
        // INCREMENT USER INTERNAL BALANCE || 
        // As soon as the payment is performed, we will increase user's balance by 10% 
        await UserService.incrementUserBalance(post.client_id, post.price * 0.1)
        await post.sendOnModerationStep()
    }
    /**
    *  send post in certain chat (it may be moderation step or production yet) 
    */
    public async sendPostInChat (chat_id: number) {
        const keyboard = this.keyboard ? JSON.parse(this.keyboard) : []
        const p = this.photo ? JSON.parse(this.photo) : null

        if (p) {
            await bot.telegram.sendPhoto(chat_id, p[0].file_id, {
                caption: this.text, reply_markup: {
                    inline_keyboard: keyboard
                }
            })
        } else {
            await bot.telegram.sendMessage(chat_id, this.text, { reply_markup: { inline_keyboard: keyboard } })
        }
    }


    public registerPublicationEvents (): void {
        if (!this.publication_end_date) throw Error('Unregistered post')

        const now = new Date()
        const end: Date = this.publication_end_date.toDate()
        const hour = this.publication_hour
        const ads_chat_id = this.chat.id

        schedule.scheduleJob({ start: now, end: end, hour: hour, minute: 10 }, () => {
            this.sendPostInChat(ads_chat_id)
        })
    }

    // Выполняется когда модератор принял пост
    public async adoptProduction (): Promise<void> {

        const post_id = this.id

        this.publication_start_date = moment()
        this.publication_end_date = moment().add(this.advertising_days, 'days')

        try {
            await this.sendMessageToPostOwner(`Ваш пост под номером ${post_id} прошел модерацию!`)
            await PostService.takePostIntoProduction(this)
        }
        catch (e: any) {
            bot.telegram.sendMessage(this.client_id, `Упс. Ошибка. Пожалуйста, напишите в поддержку! \n\n ${JSON.stringify(e.message)}`)
        }
    }

    // Выполняется когда модератор отклонил пост
    public async rejectProduction (): Promise<void> {
        const post_id = this.id
        this.sendMessageToPostOwner(`Мы вынуждены отказать вам в размещениии поста под номером ${post_id}. Свяжитель с поддержкой, чтобы обсудить нарушения. Деньги зачислены на ваш внутренний баланс. Ими можно оплатить другой пост. Ознакомиться с требованиями к рекламным постам вы можете на главной странице бота. Будьте Внимательны! `)
        // money refound 
        await UserService.incrementUserBalance(this.client_id, this.price)
    }


    private calculatePrice () {
        let discount = 0

        if (this.advertising_days >= 3) discount = 0.25
        if (this.advertising_days >= 21) discount = 0.3
        if (this.advertising_days >= 30) discount = 0.4

        const priceWithDiscount: number = this.chat.per_day_price * this.advertising_days * (1 - discount)
        return parseInt(priceWithDiscount.toFixed(0))
    }

    private async sendMessageToPostOwner (message: string): Promise<void> {
        await bot.telegram.sendMessage(this.client_id, message)
    }

}