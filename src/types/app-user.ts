import { User } from "telegraf/typings/core/types/typegram"

type UserStatuses = 'customer' | 'moderator' | 'admin'

export interface AppUser extends User {
    balance: number
    chat_id: number
    status_id: number
}
