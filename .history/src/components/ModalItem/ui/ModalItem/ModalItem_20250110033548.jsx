import { productsName } from "@/const/const";
import { getProductItem, getProductItemLoading } from "@/redux/productItem/selectors/productItemSelectors";
import { Modal } from "@/ui/Modal";
import { useSelector } from "react-redux";
import { ModalItemPizza } from "../ModalItemPizza/ModalItemPizza";

const ModalItem = (props) => {
    const { isOpen, setIsOpen } = props;

    const product = useSelector(getProductItem)
    const loading = useSelector(getProductItemLoading)

    const productOptions = () => {
        const props = {

        }
        switch (product.product) {
            case productsName.PIZZAS:
                return < ModalItemPizza />
                
                break;
        
            default:
                break;
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            width={1070}
            haight={680}
            border={25}
        ></Modal>
    );
};

export { ModalItem };
