import ReactModal from "react-modal";
import cls 

const Modal = (props) => {
    const { isOpen, children } = props;
    return (
        <ReactModal
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
