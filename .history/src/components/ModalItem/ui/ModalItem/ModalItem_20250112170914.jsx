import { productsName } from "@/const/const";
import { getProductItem, getProductItemLoading, getProductItemPrice } from "@/redux/productItem/selectors/productItemSelectors";
import { Modal } from "@/ui/Modal";
import { useSelector } from "react-redux";
import { ModalItemPizza } from "../ModalItemPizza/ModalItemPizza";
import { ModalItemRolls } from "../ModalItemRolls/ModalItemRolls";
import { ModalItemOthers } from "../ModalItemOthers/ModalItemOthers";

const ModalItem = (props) => {
    const { isOpen, setIsOpen } = props;

    const product = useSelector(getProductItem)
    const loading = useSelector(getProductItemLoading)
    const price = useSelector(getProductItemPrice)

    const productOptions = () => {
        const props = {
            isOpen: isOpen,
            product: product,
            price: price,
        }
        switch (product.product) {
            case productsName.PIZZAS:
                return < ModalItemPizza {...props} />
            case productsName.ROLLS:
                return < ModalItemRolls {...props} />
            case productsName.OTHERS:
                return < ModalItemOthers {...props} />
        
            default:
                return null;
        }
    }

    

    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            width={1070}
            height={680}
            border={25}
        >
            {productOptions()}
        </Modal>
    );
};

export { ModalItem };
