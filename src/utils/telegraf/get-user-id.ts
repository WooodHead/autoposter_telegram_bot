import { User } from 'telegraf/typings/core/types/typegram'
import { MyContext } from '../../types'

export const getUserId = (ctx: MyContext): number => {
    if (ctx.callbackQuery) {
        const user = ctx.callbackQuery.from.id
        return user
    } else if (ctx.message) {
        const user = ctx.message.from.id
        return user
    }
    throw new Error('Unrecognized user id from message')
}

export const getUser = (ctx: MyContext): User => {
    if (ctx.callbackQuery) {
        const user = ctx.callbackQuery.from
        return user
    } else if (ctx.message) {
        const user = ctx.message.from
        return user
    }

    throw new Error('Unrecognized user id from message')
}
