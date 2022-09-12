import { bot } from '.'
import Post from './post'
import UserService from './services/user-service'
import { acceptPostKeyboard as moderatorKeyboard } from "./utils/keyboards/moderator/accept-post-keyboard"

const adminPostModerationMess = async (post: Post) => {
    const user = await UserService.getUserByPk(post.client_id)
    return (
        (`
Привет, новый пост на модерацию!
Чат: ${post.chat.name}
Клиент: ${user.username ? user.username : user.id}
Стоимость: ${post.price} 
Срок размещения ${post.advertising_days}
`)
    )
}

export default class Admin {

    public static async sendPostOnModeration (post: Post) {
        const admins = await UserService.getModeratorList()

        admins.forEach(async each => {
            const post_id = post.id
            const admin_chat_id = each.chat_id

            if (!post_id) throw Error('Unregistered Post dosen`t have id')

            await post.sendPostInChat(admin_chat_id)
            const mess = await adminPostModerationMess(post)
            const acceptanceMessage = await bot.telegram.sendMessage(admin_chat_id, mess, moderatorKeyboard(post_id))


            // Регистация обработчиков inline клавиатура у модератора
            bot.action(`post-on-moderation-${post_id}-submit`, async () => {
                await post.adoptProduction()

                bot.telegram.editMessageText(
                    admin_chat_id,
                    acceptanceMessage.message_id,
                    undefined,
                    acceptanceMessage.text + `\nОдобрен.`
                )
            })

            bot.action(`post-on-moderation-${post_id}-discard`, async () => {
                await post.rejectProduction()

                bot.telegram.editMessageText(
                    admin_chat_id,
                    acceptanceMessage.message_id,
                    undefined,
                    acceptanceMessage.text + `\nОтклонен.`
                )
            })
        })

    }


}