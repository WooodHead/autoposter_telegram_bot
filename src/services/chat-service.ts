import Chat from "../chat"
import HasuraAPI from "../utils/hasura-api"

type GetChatsRes = {
    auto_poster_bot_advertising_chat: Array<any>
}

export default class ChatService {

    static async getChats (): Promise<Chat[]> {
        const query = `#graphql
        query MyQuery {
            auto_poster_bot_advertising_chat {
              id
              name
              per_day_price
              target_audience
            }
          }
        `

        const data = await HasuraAPI.send<GetChatsRes>({ query })
        return data.auto_poster_bot_advertising_chat.map(each => Chat.fromJSON(each))
    }
}