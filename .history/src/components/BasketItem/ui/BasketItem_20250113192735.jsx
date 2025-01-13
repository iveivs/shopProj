import { getBasketItems } from "@/redux/basket/selectors/basketSelectors";
import { useSelector } from "react-redux";
import cls from "./BasketItem.module.scss";
import { productsName } from "@/const/const";

const BasketItem = () => {
    const basket = useSelector(getBasketItems);

    const description = (product) => {
        switch (product.product) {
            case productsName.PIZZAS:
                return (
                    <span>
                        {product.type} тесто, {product.size}
                    </span>
                )
            case productsName.ROLLS:
                return (
                    <span>
                        Кол-во - {product.quantity} шт.
                    </span>
                )
            case productsName.OTHERS:
                return null
        
            default:
                return null
        }
    }

    const item = basket.map((el) => (
        <div key={el.id} className={cls.body}>
            <div className={cls.content}>
                <div className={cls.main}>
                    <p>{el.title}</p>
                </div>
            </div>
        </div>
    ));

    return (
        <div className={cls.basketContent}>
            <h2>Ваш заказ:</h2>
        </div>
    );
};

export { BasketItem };
