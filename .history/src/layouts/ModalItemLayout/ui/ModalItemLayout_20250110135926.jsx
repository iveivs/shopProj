import cls from './ModalItemLayout.module.scss'
const ModalItemLayout = (props) => {
    const {} = props
  return (
    <div className={cls.body}>
        <img src="" alt="" className={cls.img} />
        <div className={cls.content}>
            <h3 className={cls}></h3>
        </div>
    </div>
  )
}

export  {ModalItemLayout}