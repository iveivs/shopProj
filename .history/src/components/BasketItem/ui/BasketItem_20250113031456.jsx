import { getBasketItems } from "@/redux/basket/selectors/basketSelectors";
import { useSelector } from "react-redux";
import cls from "./BasketItem.modele.scss"

const BasketItem = () => {
    const basket = useSelector(getBasketItems);

    const item = basket.map((el) => (
        <div key={el.id} className={cls.body}></div>
    ))

    return <div className={cls.basketContent}>
        <h2>Ваш заказ:</h2>
    </div>;
};

export { BasketItem };
