export const calcMinPricePizzas = (sizes, doughs) => {
    // const arrayMinSizes = [...sizes].sort((a,b) => a.price - b.price)
    const arrayMinSizes = sizes.toSorted((a,b) => a.price - b.price)[0].price
    const arrayMinDoughs = doughs.toSorted((a,b) => a.price - b.price)[0]

    return arrayMinSizes
}