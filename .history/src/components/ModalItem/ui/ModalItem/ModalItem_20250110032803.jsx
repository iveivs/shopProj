import { Modal } from "@/ui/Modal";

const ModalItem = (props) => {
    const {isOpen, setIsOpen} = props
    return <Modal isOpen={isOpen} setIsOpen={setIsOpen} w></Modal>;
};

export { ModalItem };
