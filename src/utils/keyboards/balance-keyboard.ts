import { Markup } from "telegraf";

export const balanceButtons = ["◀️ Назад", "Пополнить 💵"]

export const balanceKeyboard = Markup.keyboard([
    [balanceButtons[0], balanceButtons[1]],
]).resize()