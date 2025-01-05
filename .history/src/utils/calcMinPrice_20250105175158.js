export const calcMinPricePizzas = (sizes, doughs) => {
    // const arrayMinSizes = [...sizes].sort((a,b) => a.price - b.price)
    const priceMinPizzas = sizes.toSorted((a,b) => a.price - b.price)[0].price
    const priceMinDoughs = doughs.toSorted((a,b) => a.price - b.price)[0].price

    return arrayMinSizes
}