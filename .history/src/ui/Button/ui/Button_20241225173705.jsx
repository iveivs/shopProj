import classNames from "classnames"
import cls from "./Button.module.scss"

const variantClasses = {
    clear: 'clear',
    normal: 'normal',
}

const Button = (props) => {
    const { children, className, variant, active } = props

    const variantClass = variantClasses[variant] || variantClasses.normal

    console.log('variantClass', variantClass);
    return (
        <button className={classNames(`button ${className}`, cls[variantClass], {
            [cls[]]
        })}>
            {children}
        </button>
    )
}

export { Button }