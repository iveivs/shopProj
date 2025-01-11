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
            className={classNames(cls.animate, cls[variantClass])}
            isOpen={isOpen}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            htmlOpenClassName={cls.modal}
            over
        >
            {children}
        </ReactModal>
    );
};

export { Modal };
