import { ModalItemLayout } from "@/layouts/ModalItemLayout";

const ModalItemPizza = (props) => {
    const { isOpen, product} = props

    const newParams = {
        id
    }

    console.log('product', product);
    return <ModalItemLayout  />;
};

export { ModalItemPizza };
