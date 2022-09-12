export function stringifyQueryParams(obj: Record<string, string | number | null | boolean>) {
    let queryString = '?'

    Object.keys(obj).forEach(key => {
        if (!obj[key]) {
            delete obj[key];
        }
    });

    Object.keys(obj).forEach((each, index, array) => {
        queryString += `${each}=${Object.values(obj)[index]}`
        if (index !== array.length - 1) {
            queryString += '&'
        }
    })
    return queryString
}