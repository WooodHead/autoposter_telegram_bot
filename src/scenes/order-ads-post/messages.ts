import { AdsChat } from "../../types/ads-chat"

export const priseListMessage = `
Прайс лист на рекламный пост в чатах-партнерах:

1 день - 250₽
от 3-х дней скидка 25%   - 562 ₽
от 21-го дня скидка 30%  - 1225 ₽    
от 30-ти дней скидка 40% - 4500 ₽

Выберете из списка желаемый чат для рекламы
`

interface IGenerateFinallMessage {
    chat: AdsChat,
    advertisingDays: number,
    prise: number,
    postMessage: string
}
export const generateFinallMessage = ({ chat, advertisingDays, prise, postMessage }: IGenerateFinallMessage) => (
    `Чат: ${chat.name}
Аудитория: ${chat.description}
Стоимость размещения: ${prise}
Срок размещения: ${advertisingDays} дня
-----
Пост: ${postMessage}
----`
)