import { Markup } from "telegraf";

export const mainButtons = ["🔍 Заказать услуги рекламы", "☸ Баланс", "📞 Поддержка"]

export const mainKeyboard = Markup.keyboard([
    [mainButtons[0]],
    [mainButtons[1], mainButtons[2]],
]).resize()