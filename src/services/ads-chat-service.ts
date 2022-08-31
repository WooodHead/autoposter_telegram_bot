import { AdsChat } from "../types/ads-chat"
import HasuraAPI from "../utils/hasura-api"

type GetChatsResponce = {
  auto_poster_bot_advertising_chat: Array<AdsChat>
}

export default class AdvertisingChatService {

  static async getChats() {
    const query = `
        query MyQuery {
            auto_poster_bot_advertising_chat {
              chat_id
              description
              name
              per_day_price
            }
          }
        `
    const data = await HasuraAPI.send<GetChatsResponce>({ query })
    return data
  }
}