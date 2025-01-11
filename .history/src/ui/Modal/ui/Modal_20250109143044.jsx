import ReactModal from "react-modal"

const Modal = (props) => {
    const {isOpen, children} = props
  return (
    < ReactModal isOpen >
        {children}
    </ ReactModal>
  )
}

export  {Modal}