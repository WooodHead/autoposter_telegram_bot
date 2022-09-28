import { Markup } from 'telegraf'

export const payKeyboardButtons = [
    'Перейти к оплате 🔗',
    'Оплатить внутренним балансом',
    '◀️ Назад',
]

export const payKeyboard = Markup.keyboard([
    [payKeyboardButtons[0]],
    [payKeyboardButtons[1]],
    [payKeyboardButtons[2]],
])
    .resize()
    .oneTime()
