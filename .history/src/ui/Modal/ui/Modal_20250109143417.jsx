import ReactModal from "react-modal";
import cls from "./Modal.module.scss"
import classNames from "classnames";

const 

const Modal = (props) => {
    const { isOpen, children } = props;
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
