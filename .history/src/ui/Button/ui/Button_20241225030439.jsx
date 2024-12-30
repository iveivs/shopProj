const Button = (props) => {
    const { children, className } = props
    return (
        <button>
            {children}
        </button>
    )
}

export { Button }