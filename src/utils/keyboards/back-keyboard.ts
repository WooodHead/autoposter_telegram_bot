import { Markup } from "telegraf";

export const backKeyboardButton = "◀️ Назад"
export const backKeyboard = Markup.keyboard([
    [backKeyboardButton],
]).resize().oneTime()