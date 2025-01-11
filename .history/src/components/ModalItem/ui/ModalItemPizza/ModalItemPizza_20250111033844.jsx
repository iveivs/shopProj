import { productsName } from "@/const/const";
import { ModalItemLayout } from "@/layouts/ModalItemLayout";
import { getProductItemPizzaSize, getProductItemPizzaType } from "@/redux/productItem/selectors/productItemSelectors";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ModalItemPizza = (props) => {
    const { isOpen, product} = props

    const sizePizza = useSelector(getProductItemPizzaSize)
    const typePizza = useSelector(getProductItemPizzaType)

    useEffect(() => {
        if(productsName.PIZZAS ===)
    }, [])

    const newParams = {
        id: product.id,
        product: product.product,
        img: product.photo,
        title: product.name,
    }

    console.log('product', product);
    return <ModalItemLayout params={newParams} />;
};

export { ModalItemPizza };
