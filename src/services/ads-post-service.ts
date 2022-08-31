import { AdsPost } from "../types/ads-post"
import HasuraAPI from "../utils/hasura-api"

type CreateAdsPostResponce = {
    insert_auto_poster_bot_advertising_post_one: Array<AdsPost>
}

export default class AdvertisingPostService {

    static async createAdsPost(object: AdsPost) {
        const query = `
        mutation MyMutation($object: auto_poster_bot_advertising_post_insert_input!) {
            insert_auto_poster_bot_advertising_post_one(object: $object) {
                advertising_days
                id
                is_paid
                passed_moderation
                post_message
                price
                tg_client_id
            }
        }        
        `
        const data = await HasuraAPI.send<CreateAdsPostResponce>({ query, variables: { object: object } })
        return data
    }
}