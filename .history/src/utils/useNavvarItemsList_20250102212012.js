import PizzaProduct from '@/assets/img/pizzaProduct.svg'
import RollProduct from '@/assets/img/rollProduct.svg'
import OtherProduct from '@/assets/img/otherProduct.svg'

const useNavvarItemsList = () => {
    const navbarItemsList = [
        {
            path: '/pizzas',
            Icon: PizzaProduct,
            text: 'Пиццы'
        },
        {
            path: '/rolls',
            Icon: RollProduct,
            text: 'Роллы'
        },
        {
            path: '/others',
            Icon: OtherProduct,
            text: 'Прочее'
        },
    ]
    return navbarItemsList
}
export { useNavvarItemsList }