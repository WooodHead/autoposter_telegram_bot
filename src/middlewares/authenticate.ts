import { MyContext } from '../types'

import { mainKeyboard } from '../utils/keyboards/main-keyboard'
import { getUser } from '../utils/telegraf/get-user-id'
import UserService, {
    UserNotRegisteredError,
} from '../services/user.service/user-service'
import { Middleware } from 'telegraf'

/**
 *  Authentication and registration middleware.
 *  Using third-party package that provoding json sessions to
 *  reduce amount of non-nessesary requsts
 *
 * @param ctx
 * @param next
 * @returns
 */
export const authenticate: Middleware<MyContext> = async (
    ctx: MyContext,
    next: () => Promise<void>,
) => {
    try {
        const user = getUser(ctx)
        const sessionUser = ctx.session?.user

        if (!sessionUser) {
            const app_user = await UserService.getUserByPk(user.id)

            if (app_user instanceof UserNotRegisteredError) {
                const newuser = await UserService.registerUser({
                    first_name: user.first_name,
                    last_name: user.last_name,
                    id: user.id,
                    chat_id: ctx.chat?.id,
                    username: user.username,
                })

                ctx.session.user = newuser
                await ctx.reply(
                    `${newuser.first_name}, привет! Теперь и ты с нами 🥳`,
                    mainKeyboard,
                )
            } else {
                ctx.session.user = app_user
            }
        }
        return next()
    } catch (error) {
        console.log(error)
        ctx.reply('Error: ' + error.message)
    }
}
