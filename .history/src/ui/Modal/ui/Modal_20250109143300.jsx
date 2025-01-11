import ReactModal from "react-modal";
import cls from "./Modal.module.scss"

const Modal = (props) => {
    const { isOpen, children } = props;
    return (
        <ReactModal
            cla
            isOpen={isOpen}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            htmlOpenClassName={cls.modal}
        >
            {children}
        </ReactModal>
    );
};

export { Modal };
