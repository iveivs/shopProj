import { getBasketItems } from "@/redux/basket/selectors/basketSelectors";
import { useSelector } from "react-redux";

const BasketItem = () => {
    const basket = useSelector(getBasketItems);

    const 

    return <div className={cls.basketContent}>
        <h2>Ваш заказ:</h2>
    </div>;
};

export { BasketItem };
