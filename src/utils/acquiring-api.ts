import * as dotenv from 'dotenv'
dotenv.config()
import crypto from "crypto"
import fetch from 'node-fetch'


type AcquiringAPIRes<R> = {
    error?: string
} & R

/**
 * Freekassa API gateway
 */
export default class AcquiringAPI {

    static async send<T> (url: string, body_data: Record<string, string | number>): Promise<T> {
        if (url[0] !== '/') {
            console.error('Non valid url. Url wourd starts with slash (ノ‥)ノ')
        }
        if (!process.env.FREEKASSA_SHOP_ID) {
            throw Error('FREEKASSA_SHOP_ID must be provided!')
        }


        const secondsSinceEpoch: number = Math.round(Date.now() / 1000)

        const permanentFields = {
            shopId: process.env.FREEKASSA_SHOP_ID,
            nonce: secondsSinceEpoch,
        }
        const response = await fetch("https://api.freekassa.ru/v1" + url, {
            method: 'POST',
            body: JSON.stringify({
                ...body_data,
                ...permanentFields,
                signature: this._createSignature({ ...body_data, ...permanentFields })
            }),
        })

        const data = await response.json() as AcquiringAPIRes<T>

        if (data.error) {
            console.error(data.error)
        }

        return data
    }


    static _createSignature (data: Record<string, string | number | boolean>): string {
        const ordered = (Object.keys(data).sort().reduce(
            (obj: any, key) => {
                obj[key] = data[key]
                return obj
            }, {}
        ))

        const stringified = Object.values(ordered).join('|')
        if (!process.env.FREEKASSA_API_KEY) throw Error("Freekassa API key are undefined!")

        const sha256Hasher = crypto.createHmac("sha256", process.env.FREEKASSA_API_KEY)
        return sha256Hasher.update(stringified).digest("hex")
    }
}

