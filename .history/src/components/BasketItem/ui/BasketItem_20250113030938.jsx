import { getBasketItems } from "@/redux/basket/selectors/basketSelectors"
import { useSelector } from "react-redux"

const BasketItem = () => {
    const basket = useSelector(getBasketItems)
  return (
    <div className={cls.}>BasketItem</div>
  )
}

export  {BasketItem}