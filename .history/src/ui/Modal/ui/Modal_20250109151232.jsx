import ReactModal from "react-modal";
import cls from "./Modal.module.scss";
import classNames from "classnames";

ReactModal.setAppElement("#root");

const variantClasses = {
    rightModal: "rightModal",
    normal: "modal",
};

const Modal = (props) => {
    const {
        isOpen,
        children,
        variant,
        width,
        height,
        border,
        scroll,
        setIsOpen,
    } = props;

    const variantClass = variantClasses[variant] || variantClasses.normal;

    const closeModal = () => {
        setIsOpen()
    };

    return (
        <ReactModal
            style={{
                content: {
                    maxWidth: width,
                    maxHeight: height,
                    borderRadius: border,
                    overflowY: scroll,
                },
            }}
            className={classNames(cls.animate, cls[variantClass])}
            isOpen={isOpen}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            htmlOpenClassName={cls.modal}
            overlayClassName={cls.overlay}
            closeTimeoutMS={300}
            onAfterClose={closeModal}
            parentSelector={() => document.querySelector("#app")}
        >
            {children}
        </ReactModal>
    );
};

export { Modal };
