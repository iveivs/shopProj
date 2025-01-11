// import ReactModal from "react-modal";
// import cls from "./Modal.module.scss";
// import classNames from "classnames";

// ReactModal.setAppElement("#root");

// const variantClasses = {
//     rightModal: "rightModal",
//     normal: "modal",
// };

// const Modal = (props) => {
//     const {
//         isOpen,
//         children,
//         variant,
//         width,
//         height,
//         border,
//         scroll,
//         setIsOpen,
//     } = props;

//     const variantClass = variantClasses[variant] || variantClasses.normal;

//     const closeModal = () => {
//         setIsOpen(false)
//     };

//     return (
//         <ReactModal
//             style={{
//                 content: {
//                     maxWidth: width,
//                     maxHeight: height,
//                     borderRadius: border,
//                     overflowY: scroll,
//                 },
//             }}
//             className={classNames(cls.animate, cls[variantClass])}
//             isOpen={isOpen}
//             shouldCloseOnEsc={true}
//             shouldCloseOnOverlayClick={true}
//             htmlOpenClassName={cls.modal}
//             overlayClassName={cls.overlay}
//             closeTimeoutMS={300}
//             onAfterClose={closeModal}
//             parentSelector={() => document.querySelector("#app")}
//         >
//             {children}
//         </ReactModal>
//     );
// };

// export { Modal };

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
        setIsOpen(false); // Закрываем модальное окно
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
            shouldCloseOnEsc={true} // Разрешаем закрытие по нажатию на ESC
            shouldCloseOnOverlayClick={true} // Разрешаем закрытие по клику на оверлей
            htmlOpenClassName={cls.modal}
            overlayClassName={cls.overlay}
            closeTimeoutMS={300}
            onRequestClose={closeModal} // Используем onRequestClose вместо onAfterClose
            parentSelector={() => document.querySelector("#app")}
        >
            {children}
        </ReactModal>
    );
};

export { Modal };

