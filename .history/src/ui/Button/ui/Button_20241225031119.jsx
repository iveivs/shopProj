import classNames from "classnames"
import cls from "./Button.module.scss"

const variantClasses = {
    clear: 'clear',
    normal: 'normal',
}

const Button = (props) => {
    const { children, className, variant } = props

    const 
    return (
        <button className={classNames('button')}>
            {children}
        </button>
    )
}

export { Button }