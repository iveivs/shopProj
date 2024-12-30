import classNames from "classnames"
import cls from "./Button.module.scss"

const colorClasses = {
    clear: 'clear',
    normal: 'normal',
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