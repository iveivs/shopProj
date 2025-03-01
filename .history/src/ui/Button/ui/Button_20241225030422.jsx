const Button = (props) => {
    const { children } = props
    return (
        <button>
            {children}
        </button>
    )
}

export { Button }