import { bot } from '.'
import Post from './post'
import UserService from './services/user.service/user-service'
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
        const admin_chat_id = await (await UserService.getAdmin()).id

        const post_id = post.id

        if (!post_id) throw Error('Unregistered Post dosen`t have id')

        await post.sendPostInChat(admin_chat_id)
        const mess = await adminPostModerationMess(post)
        const acceptanceMessage = await bot.telegram.sendMessage(admin_chat_id, mess, moderatorKeyboard(post_id))

        // Регистация обработчиков inline клавиатура у модератора
        bot.action(`post-on-moderation-${post_id}-submit`, async () => {

            await post.adoptProduction()

            await bot.telegram.editMessageText(
                admin_chat_id,
                acceptanceMessage.message_id,
                undefined,
                acceptanceMessage.text + `\n\nОдобрен.`,
                { reply_markup: undefined }
            )
        })

        bot.action(`post-on-moderation-${post_id}-discard`, async () => {
            await post.rejectProduction()

            await bot.telegram.editMessageText(
                admin_chat_id,
                acceptanceMessage.message_id,
                undefined,
                acceptanceMessage.text + `\n\nОтклонен.`,
                { reply_markup: undefined }
            )
        })
    }


}