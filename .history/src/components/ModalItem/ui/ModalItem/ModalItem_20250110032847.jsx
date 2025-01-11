import { Modal } from "@/ui/Modal";

const ModalItem = (props) => {
    const {isOpen, setIsOpen} = props
    return <Modal isOpen={isOpen} setIsOpen={setIsOpen} width={1070} haight={680}></Modal>;
};

export { ModalItem };
