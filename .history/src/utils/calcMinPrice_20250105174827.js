export const calcMinPricePizzas = (sizes, doughs) => {
    // const arrayMinSizes = [...sizes].sort((a,b) => a.price - b.price)
    const arrayMinSizes = sizes.toSorted((a,b) => a.price - b.price)[0]
    const arrayMinSizes = sizes.toSorted((a,b) => a.price - b.price)[0]

    return arrayMinSizes
}