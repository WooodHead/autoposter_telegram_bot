export type User = {
    id: number
    last_name?: string
    first_name?: string
    balance: number
    client_id: string

    user_status: {
        id: number
        name: string
    }
}