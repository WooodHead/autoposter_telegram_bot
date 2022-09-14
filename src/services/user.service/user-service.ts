import { client } from '../..'
import {
    Auto_Poster_Bot_User,
    GetModeratorsDocument,
    GetUserByPkDocument,
    IncrementUserBalanceDocument,
    InsertUserDocument
} from '../../generated/graphql'
import { AppUser } from '../../types/app-user'

interface RegisterUserPropsType {
    id: number
    first_name: string
    last_name?: string
    chat_id?: number
    username?: string
}


type IncrementUserBalanceOptions = {
    withBonus: boolean
}

export default class UserService {

    static async getUserByPk (id: number) {
        const data = (await client.request(GetUserByPkDocument, { id })).auto_poster_bot_user_by_pk!

        return { is_bot: false, ...data } as AppUser
    }

    static async registerUser (object: RegisterUserPropsType) {
        const data = (await client.request(InsertUserDocument, { object: object })).insert_auto_poster_bot_user_one

        return { ...data } as AppUser
    }

    static async getAdmin () {
        const moders = (await client.request(GetModeratorsDocument)).auto_poster_bot_user

        if (!moders.length) throw Error('No one modderator registered')
        return { ...moders[0] } as AppUser

    }

    static async incrementUserBalance (
        client_id: number,
        increment_on: number,
        options: IncrementUserBalanceOptions = { withBonus: false }
    ) {
        const finalAmount = options.withBonus ? increment_on * 1.1 : increment_on
        const data = await client.request(IncrementUserBalanceDocument, { id: client_id, balance: finalAmount })

        return data.update_auto_poster_bot_user_by_pk
    }

    static async decreaseUserBalance (
        client_id: number,
        decrement_on: number
    ) {
        const data = await client.request(IncrementUserBalanceDocument, { id: client_id, balance: -decrement_on })
        return data.update_auto_poster_bot_user_by_pk
    }

}