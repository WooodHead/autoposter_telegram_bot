import { Context } from 'telegraf';
import UserService from '../services/user-service';
/**
 * Checks whether user is admin and can access restricted areas
 * @param ctx - telegram context
 * @param next - next function
 */



export const Authenticate = async (ctx: Context, next: Function) => {
    const client_id: string = ctx.message.from.id.toString()
    const person = ctx.message.from

    const user = await UserService.getUserByPk(client_id)

    if (user.auto_poster_bot_user_by_pk === null) {
        const user = await UserService.registerUser({
            first_name: person.first_name,
            last_name: person.last_name,
            client_id: client_id
        })

        ctx.reply(`${user.insert_auto_poster_bot_user_one.first_name}, вы успешно зарегестрировались! 🥳`)
        return
    }

    ctx.state.user = user.auto_poster_bot_user_by_pk
    next()
};