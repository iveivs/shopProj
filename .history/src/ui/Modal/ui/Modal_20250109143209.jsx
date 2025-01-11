import ReactModal from "react-modal";

const Modal = (props) => {
    const { isOpen, children } = props;
    return (
        <ReactModal
            isOpen={isOpen}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            htmlOpenClassName=""
        >
            {children}
        </ReactModal>
    );
};

export { Modal };
