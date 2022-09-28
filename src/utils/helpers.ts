import { MyContext } from '../types'

export function stringifyQueryParams(
    obj: Record<string, string | number | null | boolean>,
) {
    let queryString = '?'

    Object.keys(obj).forEach((key) => {
        if (!obj[key]) {
            delete obj[key]
        }
    })

    Object.keys(obj).forEach((each, index, array) => {
        queryString += `${each}=${Object.values(obj)[index]}`
        if (index !== array.length - 1) {
            queryString += '&'
        }
    })
    return queryString
}

export const ctxHaveText = (ctx: MyContext): boolean => {
    if (ctx.message) {
        return 'text' in ctx.message ? true : false
    } else return false
}

export const getCtxText = (ctx: MyContext): string | null =>
    'text' in ctx.message ? ctx.message.text : null
export const getCtxPhoto = (ctx: MyContext): unknown | null =>
    'photo' in ctx.message ? ctx.message.photo : null
