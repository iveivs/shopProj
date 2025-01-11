import ReactModal from "react-modal"

const Modal = (props) => {
    const {isOpen, children} = props
  return (
    < ReactModal isOpen shouldCloseOnEsc >
        {children}
    </ ReactModal>
  )
}

export  {Modal}