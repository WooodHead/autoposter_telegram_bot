
import Post from "../../post"
import moment from "moment"
import { plainToInstance } from 'class-transformer'
import Chat from '../../chat'
import { client } from '../..'
import {
    AddPaymentIdDocument,
    Auto_Poster_Bot_Post_Insert_Input,
    GetPostByPkDocument,
    GetProductionPostDocument,
    GetSalesChatListDocument,
    InserPostDocument,
    TakePostIntoProductionDocument
} from '../../generated/graphql'


export default class PostService {

    public static async createPost (post: Post): Promise<number> {
        const object: Auto_Poster_Bot_Post_Insert_Input = {
            advertising_chat_id: post.chat.id,
            advertising_days: post.advertising_days,
            client_id: post.client_id,
            keyboard: post.keyboard,
            photo: post.photo,
            text: post.text,
            price: post.price,
            publication_hour: post.publication_hour
        }
        return (await client.request(InserPostDocument, { object: object }))
            .insert_auto_poster_bot_post_one?.id!
    }

    public static async getPostByPk (id: number) {
        const data = (await client.request(GetPostByPkDocument, { id }))
        return data.auto_poster_bot_post_by_pk
    }


    public static async getProductionPostList (): Promise<Post[]> {

        const timeNow = moment().toISOString()
        const data = await client.request(GetProductionPostDocument, { _gte: timeNow })

        return data.auto_poster_bot_post.map(each => {
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
            post.publication_start_date = moment(each.publication_start_date!)
            post.publication_end_date = moment(each.publication_end_date!)
            return post
        })
    }

    public static async getSalesChatList () {
        const chats = await client.request(GetSalesChatListDocument)
        return chats.auto_poster_bot_advertising_chat
    }

    public static async takePostIntoProduction (post: Post): Promise<number> {
        const data = await client.request(TakePostIntoProductionDocument, {
            id: post.id!,
            publication_start_date: moment().toISOString(),
            publication_end_date: moment().add(post.advertising_days, 'days').toISOString()

        })
        return data.update_auto_poster_bot_post_by_pk?.id!
    }

    public static async addPaymentId (post_id: number, payment_id: number) {
        const data = await client.request(AddPaymentIdDocument, {
            id: post_id,
            payment_id
        })
        return data.update_auto_poster_bot_post_by_pk
    }
}