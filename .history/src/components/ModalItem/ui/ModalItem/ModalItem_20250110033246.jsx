import { Modal } from "@/ui/Modal";
import { useSelector } from "react-redux";

const ModalItem = (props) => {
    const { isOpen, setIsOpen } = props;

    useSelector

    const productOptions = () => {

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
