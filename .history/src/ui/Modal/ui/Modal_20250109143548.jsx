import ReactModal from "react-modal";
import cls from "./Modal.module.scss"
import classNames from "classnames";

const variantClasses = {
    rightModal: 'rightModal',
    normal: 'modal'
}

const Modal = (props) => {
    const { isOpen, children, variant } = props;

    const variantClass = variantClasses

    return (
        <ReactModal
            className={classNames(cls.animate)}
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
