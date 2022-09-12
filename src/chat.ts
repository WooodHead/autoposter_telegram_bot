interface IChatConstructor {
    id: number
    name: string
    target_audience: string
    per_day_price: number
}


export default class Chat {

    constructor (
        public id: number,
        public name: string,
        public target_audience: string,
        public per_day_price: number
    ) { }

    static fromJSON (json: IChatConstructor) {
        return new Chat(json.id, json.name, json.target_audience, json.per_day_price)
    }
}