import ReactModal from "react-modal"

const Modal = (props) => {
    const {isOpen, children} = props
  return (
    < ReactModal >
        {children}
    </ ReactModal>
  )
}

export  {Modal}