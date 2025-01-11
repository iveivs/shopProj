import ReactModal from "react-modal";
import cls from "./Modal.module.scss";
import classNames from "classnames";
import { useEffect, useState } from "react";

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

    const [isClosing, setIsClosing] = useState(false)

    useEffect(() => {
        if(!isOpen){
            setIsClosing(true)
        } else {
            setIsClosing(false)
        }
    }, [isOpen])

    const closeModal = () => {
        setIsOpen(false); 
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
            className={classNames(cls.animate, cls[variantClass], {
                [cls[]]
            })}
            isOpen={isOpen}
            shouldCloseOnEsc={true} 
            shouldCloseOnOverlayClick={true} 
            htmlOpenClassName={cls.modal}
            overlayClassName={cls.overlay}
            closeTimeoutMS={300}
            onRequestClose={closeModal} 
            parentSelector={() => document.querySelector("#app")}
        >
            {children}
        </ReactModal>
    );
};

export { Modal };

