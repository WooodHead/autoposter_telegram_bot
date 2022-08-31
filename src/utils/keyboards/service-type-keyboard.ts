import { Markup } from "telegraf";

export const serviceTypeButtons = ["Рекламный пост", "Прямой эфир на аудиторию", "◀️ Назад"]

export const ServiceTypeKeyboard = Markup.keyboard([
    [serviceTypeButtons[0]],
    [serviceTypeButtons[1]],
    [serviceTypeButtons[2]],
]).resize().oneTime()