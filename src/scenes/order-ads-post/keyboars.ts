import { Markup } from "telegraf";

export const payKeyboardButtons = ["Перейти к оплатите", "◀️ Назад"]

export const payKeyboard = Markup.keyboard([
    [payKeyboardButtons[0]],
    [payKeyboardButtons[1]],
]).resize().oneTime()