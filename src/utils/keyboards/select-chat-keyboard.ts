import { Markup } from "telegraf"
import Chat from '../../chat'


export const selectChatKeyboard = (chats: Array<Chat>) => {

    const buttons = chats.map((each => {
        return [Markup.button.callback(each.name, each.name)]
    }))

    return Markup.inlineKeyboard([
        ...buttons
    ])
}