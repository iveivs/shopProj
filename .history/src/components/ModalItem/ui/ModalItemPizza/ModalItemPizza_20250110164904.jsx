import { ModalItemLayout } from "@/layouts/ModalItemLayout";

const ModalItemPizza = (props) => {
    const { isOpen, product} = props

    const newParams = {
        id: product.id,
        product: product.product,
        img: product.image,
        title: product.title
    }

    console.log('product', product);
    return <ModalItemLayout  />;
};

export { ModalItemPizza };
