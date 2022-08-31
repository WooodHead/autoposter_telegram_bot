export function calculatePrice(advertisingDays: number) {
    const perDayPrise = 250
    let discount = 0

    if (advertisingDays >= 3) discount = 0.25
    if (advertisingDays >= 21) discount = 0.3
    if (advertisingDays >= 30) discount = 0.4

    const priceWithDiscount: number = perDayPrise * advertisingDays * (1 - discount)
    return priceWithDiscount
}