const Icon = (props) => {
    const { Svg, clickable, onClick, className = ""} = props

    const icon = <Svg className={`icon`}  /> 
    return (
        <div>
            Im Icon
        </div>
    )
}

export { Icon }