import ReactModal from "react-modal";
import cls from "./Modal.module.scss"
import classNames from "classnames";

const variantClasses = {
    rightModal: 'rightModal',
    normal: 'modal'
}

const Modal = (props) => {
    const { isOpen, children, variant } = props;

    const variantClass = variantClasses[variant] || variantClasses.normal

    return (
        <ReactModal
            style={
                {
                    content: {
                        
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
        >
            {children}
        </ReactModal>
    );
};

export { Modal };
