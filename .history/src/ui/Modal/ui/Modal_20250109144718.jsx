import ReactModal from "react-modal";
import cls from "./Modal.module.scss"
import classNames from "classnames";

const variantClasses = {
    rightModal: 'rightModal',
    normal: 'modal'
}

const Modal = (props) => {
    const { isOpen, children, variant, width, height, border, scroll } = props;

    const variantClass = variantClasses[variant] || variantClasses.normal

    const closeModal = () => {

    }

    return (
        <ReactModal
            style={
                {
                    content: {
                        maxWidth: width,
                        maxHeight: height,
                        borderRadius: border,
                        overflowY: scroll,
                    }
                }
            }
            className={classNames(cls.animate, cls[variantClass])}
            isOpen={isOpen}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            htmlOpenClassName={cls.modal}
            overlayClassName={cls.overlay}
            closeTimeoutMS={300}
            onAfterClose={closeModal}
            parentSelector={() => }
        >
            {children}
        </ReactModal>
    );
};

export { Modal };
