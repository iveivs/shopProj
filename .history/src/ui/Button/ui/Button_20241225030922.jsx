import classNames from "classnames"
import cls from "./Button.module.scss"

const colorClasses = {
    
}

const Button = (props) => {
    const { children, className } = props
    return (
        <button className={classNames}>
            {children}
        </button>
    )
}

export { Button }