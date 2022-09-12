import { AppUser } from '../types/app-user'
import { MyContext } from '..//types/wizard-context'
import UserService from '../services/user-service'
import { mainKeyboard } from '../utils/keyboards/main-keyboard'
import { getUser } from '../utils/get-user-id'

/**
 *  Authentication and registration middleware.
 *  Using third-party package that provoding json sessions to 
 *  reduce amount of non-nessesary requsts
 * 
 * @param ctx 
 * @param next 
 * @returns 
 */
export const authenticate = async (ctx: MyContext, next: Function) => {

    let user = getUser(ctx)
    let sessionUser: AppUser = ctx.session?.user

    if (!sessionUser) {
        const app_user: AppUser = await UserService.getUserByPk(user.id)
        // console.log(user)
        if (app_user) {
            ctx.session.user = app_user
        } else {
            // register new user
            const newuser: AppUser = await UserService.registerUser({
                first_name: user.first_name,
                last_name: user.last_name,
                id: user.id,
                chat_id: ctx.chat?.id,
                username: user.username
            })

            ctx.session.user = newuser
            await ctx.reply(`${newuser.first_name}, привет! Теперь и ты с нами 🥳`, mainKeyboard)
        }
    }

    return next()
}