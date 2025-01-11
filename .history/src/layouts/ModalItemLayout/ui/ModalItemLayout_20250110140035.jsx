import { Button } from '@/ui/Button'
import cls from './ModalItemLayout.module.scss'
const ModalItemLayout = (props) => {
    const {} = props
  return (
    <div className={cls.body}>
        <img src="" alt="" className={cls.img} />
        <div className={cls.content}>
            <h3 className={cls.title}></h3>
            <div></div>
            <div className={cls.footer}>
                <span className={cls.price}></span>
                <Button>
                    
                </Button>
            </div>
        </div>
    </div>
  )
}

export  {ModalItemLayout}