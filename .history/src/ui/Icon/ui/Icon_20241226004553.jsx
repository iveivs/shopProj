const Icon = (props) => {
    const { Svg, clickable, onClick, className = ""} = props

    const icon = <Svg className={`icon ${className}` onClick={undefined}}  /> 

    if(clickable) {
        return (
            bu
        )
    }
    return (
        <div>
            Im Icon
        </div>
    )
}

export { Icon }