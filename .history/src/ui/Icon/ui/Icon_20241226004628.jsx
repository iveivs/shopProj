const Icon = (props) => {
    const { Svg, clickable, onClick, className = ""} = props

    const icon = <Svg className={`icon ${className}` onClick={undefined}}  /> 

    if(clickable) {
        return (
            <button className={ className }>

            </button>
        )
    }
    return (
        <div>
            Im Icon
        </div>
    )
}

export { Icon }