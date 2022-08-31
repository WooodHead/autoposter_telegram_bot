import HasuraAPI from '../utils/hasura-api'
import { User } from '../types/user'

type GetUserResponce = {
    auto_poster_bot_user_by_pk?: User
}

interface RegisterUserPropsType {
    client_id: string
    first_name: string
    last_name: string
}

type RegisterUserResponse = {
    insert_auto_poster_bot_user_one: User
}

export default class UserService {

    static async getUserByPk(client_id: string): Promise<GetUserResponce> {
        const query = `
        query MyQuery($client_id: String!) {
            auto_poster_bot_user_by_pk(client_id: $client_id) {
                id
                last_name
                status_id
                balance
                client_id
                first_name
                user_status {
                    id
                    name
                }
            }
          }
        `
        const data = await HasuraAPI.send<GetUserResponce>({
            query, variables: {
                client_id: client_id
            }
        })

        return data
    }

    static async registerUser(object: RegisterUserPropsType): Promise<RegisterUserResponse> {
        const mutation = `
        mutation MyMutation($object: auto_poster_bot_user_insert_input!){
            insert_auto_poster_bot_user_one(object: $object) {
              id
              last_name
              status_id
              balance
              client_id
              first_name
              user_status {
                id
                name
              }
            }
          }
        `

        const data = await HasuraAPI.send<RegisterUserResponse>({
            query: mutation,
            variables: {
                object: object
            }
        })

        return data
    }
}