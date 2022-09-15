import { User } from "telegraf/typings/core/types/typegram"


export interface AppUser extends User {
    balance: number
    chat_id: number
    status_id: number
}
