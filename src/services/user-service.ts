import HasuraAPI from '../utils/hasura-api'
import { AppUser } from '../types/app-user'

const UserQL = `#graphql
user_status {
    id
    name
}
status_id
first_name
last_name
username
id
chat_id
balance
email
`

type GetUserRes = {
    auto_poster_bot_user_by_pk: AppUser
}

interface RegisterUserPropsType {
    id: number
    first_name: string
    last_name?: string
    chat_id?: number
    username?: string
}

type RegisterUserRes = {
    insert_auto_poster_bot_user_one: AppUser
}

type GetModeratorList = {
    auto_poster_bot_user: Array<AppUser>
}

type UpdateUserBalanceRes = {
    update_auto_poster_bot_user_by_pk: {
        id: number
    }
}



export default class UserService {

    static async getUserByPk (id: number): Promise<AppUser> {
        const query = `#graphql
        query MyQuery($id: bigint!) {
            auto_poster_bot_user_by_pk(id: $id) {
                ${UserQL}
            }
          }
        `
        const data = await HasuraAPI.send<GetUserRes>({
            query, variables: {
                id: id
            }
        })

        return data.auto_poster_bot_user_by_pk
    }

    static async registerUser (object: RegisterUserPropsType): Promise<AppUser> {
        const mutation = `#graphql
        mutation MyMutation($object: auto_poster_bot_user_insert_input!){
            insert_auto_poster_bot_user_one(object: $object) {
                ${UserQL}
            }
          }
        `

        const data = await HasuraAPI.send<RegisterUserRes>({
            query: mutation,
            variables: {
                object: object
            }
        })

        return data.insert_auto_poster_bot_user_one
    }

    static async getModeratorList (): Promise<AppUser[]> {
        const query = `#graphql
        query MyQuery {
            auto_poster_bot_user(where: {status_id: {_gt: 1}}) {
                ${UserQL}
            }
          }
          `
        const data = await HasuraAPI.send<GetModeratorList>({ query: query })
        return data.auto_poster_bot_user
    }

    static async incrementUserBalance (client_id: number, increment_on: number): Promise<void> {
        const mutation = `#graphql
        mutation MyMutation($id: bigint!, $balance: Int!) {
            update_auto_poster_bot_user_by_pk(pk_columns: {id: $id}, _inc: {balance: $balance}) {
              id
            }
          }          
        `

        await HasuraAPI.send<UpdateUserBalanceRes>({
            query: mutation, variables: {
                id: client_id,
                balance: increment_on
            }
        })
    }

}