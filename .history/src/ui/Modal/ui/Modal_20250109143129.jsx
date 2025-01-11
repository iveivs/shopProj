import ReactModal from "react-modal"

const Modal = (props) => {
    const {isOpen, children} = props
  return (
    < ReactModal isOpen={isOpen} shouldCloseOnEsc={true} shouldCloseOnOverlayClick >
        {children}
    </ ReactModal>
  )
}

export  {Modal}