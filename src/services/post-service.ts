
import Post, { PaymentStatuses } from "../post"
import HasuraAPI from "../utils/hasura-api"
import moment from "moment"
import { plainToInstance } from 'class-transformer'
import Chat from '../chat'

const PostQL = `#graphql
advertising_chat_id
advertising_days
client_id
id
payment_status
keyboard
passed_moderation
photo
price
publication_end_date
publication_start_date
text
publication_hour
chat {
    id
    name
    per_day_price
    target_audience
}
`



type GetPostByPkRes = {
    auto_poster_bot_advertising_post_by_pk: Post
}

type CreateAdsPostPropsType = {
    advertising_chat_id: number
    advertising_days: number
    client_id: number
    keyboard: string
    photo: string
    text: string
    price: number
    publication_hour: number
}

type ITakePostIntoProductionRes = {
    update_auto_poster_bot_advertising_post_by_pk: {
        id: number
    }
}

type IGetProductionPostList = {
    auto_poster_bot_advertising_post: Post[]
}

type IGetAwaitingPaymentRes = {
    auto_poster_bot_advertising_post: Post[]
}

export default class PostService {

    static async createAdsPost (post: Post): Promise<number> {
        const object: CreateAdsPostPropsType = {
            advertising_chat_id: post.chat.id,
            advertising_days: post.advertising_days,
            client_id: post.client_id,
            keyboard: post.keyboard,
            photo: post.photo,
            text: post.text,
            price: post.price,
            publication_hour: post.publication_hour
        }

        const _ = `#graphql
        mutation MyMutation($object: auto_poster_bot_advertising_post_insert_input!) {
            insert_auto_poster_bot_advertising_post_one(object: $object) {
                id
            }
        }        
        `
        const data = await HasuraAPI.send<{
            insert_auto_poster_bot_advertising_post_one: {
                id: number
            }
        }>
            ({ query: _, variables: { object } })


        return data.insert_auto_poster_bot_advertising_post_one.id
    }

    static async getPostByPk (id: number): Promise<Post> {
        const _ = `#graphql
        query MyQuery($id: Int!) {
            auto_poster_bot_advertising_post_by_pk(id: $id) {
               ${PostQL}
            }
          }
        `
        const data = await HasuraAPI.send<GetPostByPkRes>({ query: _, variables: { id } })
        return data.auto_poster_bot_advertising_post_by_pk
    }


    static async getProductionPostList (): Promise<Post[]> {
        const _ = `#graphql
        query MyQuery($_gte: timestamptz!) {
            auto_poster_bot_advertising_post(where: {publication_end_date: {_gte: $_gte}, payment_status: {_eq: 1}}) {
              ${PostQL}
            }
          }  
        `
        const timeNow = moment().toISOString()
        const data = await HasuraAPI.send<IGetProductionPostList>({ query: _, variables: { _gte: timeNow } })

        return data.auto_poster_bot_advertising_post.map(each => {
            const chat = plainToInstance(Chat, each.chat)

            const post = new Post(
                each.text,
                each.photo,
                each.keyboard,
                each.advertising_days,
                each.publication_hour,
                each.client_id,
                chat
            )

            post.id = each.id
            post.payment_status = each.payment_status
            post.publication_start_date = moment(each.publication_start_date!)
            post.publication_end_date = moment(each.publication_end_date!)
            return post
        })
    }


    static async takePostIntoProduction (post: Post): Promise<number> {
        if (!post.publication_end_date || !post.publication_start_date) {
            throw Error('Cant to take post in production due a start and end time properties dont exist.')
        }
        const _ = `#graphql
        mutation MyMutation($id: Int!, $publication_start_date: timestamptz!, $publication_end_date: timestamptz!) {
            update_auto_poster_bot_advertising_post_by_pk(pk_columns: {id: $id}, _set: {publication_start_date: $publication_start_date, publication_end_date: $publication_end_date, passed_moderation: true}) {
              id
            }
        }          
        `

        const data = await HasuraAPI.send<ITakePostIntoProductionRes>({
            query: _, variables: {
                id: post.id,
                publication_start_date: post.publication_start_date.toISOString(),
                publication_end_date: post.publication_end_date.toISOString()
            }
        })
        return data.update_auto_poster_bot_advertising_post_by_pk.id
    }

    static async updatePaymentStatus (payment_status: PaymentStatuses, post_id: number): Promise<void> {
        const _ = `#graphql
        mutation MyMutation($payment_status: Int!, $id: Int!) {
            update_auto_poster_bot_advertising_post_by_pk(pk_columns: {id: $id}, _set: {payment_status: $payment_status}) {
              id
            }
        }          
        `
        await HasuraAPI.send<ITakePostIntoProductionRes>({
            query: _, variables: {
                payment_status,
                id: post_id
            }
        })

    }

    /**
     *  We requests posts that were created less the thirty minutes ago
     * @returns An array of post IDs that is waiting for payment to be received
     */
    static async getAwaitingPayment (): Promise<Post[]> {
        const _ = `#graphql
        query MyQuery($_gte: timestamptz!) {
            auto_poster_bot_advertising_post(where: {insert_date: {_gte: $_gte}, payment_status: {_eq: 0}}) {
                ${PostQL}
            }
        }
        `

        const _gte = moment().add('-30', 'minutes').toISOString()
        const data = await HasuraAPI.send<IGetAwaitingPaymentRes>({
            query: _, variables: { _gte }
        })

        // return data.auto_poster_bot_advertising_post
        return data.auto_poster_bot_advertising_post.map(each => {
            const chat = plainToInstance(Chat, each.chat)

            const post = new Post(
                each.text,
                each.photo,
                each.keyboard,
                each.advertising_days,
                each.publication_hour,
                each.client_id,
                chat
            )

            post.id = each.id
            post.payment_status = each.payment_status
            post.publication_start_date = moment(each.publication_start_date!)
            post.publication_end_date = moment(each.publication_end_date!)
            return post
        })

    }

}