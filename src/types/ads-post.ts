import { AdsChat } from "./ads-chat"

export type AdsPost = {
    id?: number
    advertising_days: number
    is_paid?: boolean
    passed_moderation?: boolean
    post_message: string
    price: number
    tg_client_id: string
    tg_chat_id: string
    advertising_chat: AdsChat
}