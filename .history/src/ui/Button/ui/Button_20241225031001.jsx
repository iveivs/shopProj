import classNames from "classnames"
import cls from "./Button.module.scss"

const colorClasses = {
    clear: 'clear'
}

const Button = (props) => {
    const { children, className } = props
    return (
        <button className={classNames('button')}>
            {children}
        </button>
    )
}

export { Button }