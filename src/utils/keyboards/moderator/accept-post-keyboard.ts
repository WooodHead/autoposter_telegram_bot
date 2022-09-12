
import { Markup } from "telegraf"

export const acceptPostKeyboard = (post_id: number) => Markup.inlineKeyboard([
    Markup.button.callback("Опубликовать ✅", `post-on-moderation-${post_id}-submit`),
    Markup.button.callback("Отклонить ❌", `post-on-moderation-${post_id}-discard`)
])
