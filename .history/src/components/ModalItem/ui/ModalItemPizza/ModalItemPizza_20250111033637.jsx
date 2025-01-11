import { ModalItemLayout } from "@/layouts/ModalItemLayout";
import { useSelector } from "react-redux";

const ModalItemPizza = (props) => {
    const { isOpen, product} = props

    useSelector(getProd)

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
