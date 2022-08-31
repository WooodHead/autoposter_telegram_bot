import { Markup } from "telegraf";
import { AdsChat } from "../../types/ads-chat";

export const selectAdsChatKeyboard = (chats: Array<AdsChat>) => {

    const buttons = chats.map((each => {
        return [Markup.button.callback(each.name, each.name)]
    }))

    return Markup.inlineKeyboard([
        ...buttons
    ])
}