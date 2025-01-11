import { ModalItemLayout } from "@/layouts/ModalItemLayout";
import { getProductItemPizzaSize, getProductItemPizzaType } from "@/redux/productItem/selectors/productItemSelectors";
import { useSelector } from "react-redux";

const ModalItemPizza = (props) => {
    const { isOpen, product} = props

    const sizePizza = useSelector(getProductItemPizzaSize)
    const Pizza = useSelector(getProductItemPizzaType)

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
