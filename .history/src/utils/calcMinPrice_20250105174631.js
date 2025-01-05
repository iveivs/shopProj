export const calcMinPricePizzas = (sizes, doughs) => {
    // const arrayMinSizes = [...sizes].sort((a,b) => a.price - b.price)
    const arrayMinSizes = sizes.toSort((a,b) => a.price - b.price)

    return arrayMinSizes
}