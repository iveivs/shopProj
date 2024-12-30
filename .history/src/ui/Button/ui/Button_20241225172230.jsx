import classNames from "classnames"
import cls from "./Button.module.scss"

const variantClasses = {
    clear: 'clear',
    normal: 'normal',
}

const Button = (props) => {
    const { children, className, variant } = props

    const variantClass = variantClasses[variant] || variantClasses.normal

    console.log('variantClass', variantClass);
    return (
        <button className={classNames('button'), cls[v]}>
            {children}
        </button>
    )
}

export { Button }