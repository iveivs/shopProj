

const Button = (props) => {
    const { children, className } = props
    return (
        <button className={classNames}>
            {children}
        </button>
    )
}

export { Button }