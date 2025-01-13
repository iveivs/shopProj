import { getBasketItems } from "@/redux/basket/selectors/basketSelectors";
import { useSelector } from "react-redux";

const BasketItem = () => {
    const basket = useSelector(getBasketItems);
    return <div className={cls.basketContent}>
        <h2></h2>
    </div>;
};

export { BasketItem };
