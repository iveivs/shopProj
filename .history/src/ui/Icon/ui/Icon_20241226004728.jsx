const Icon = (props) => {
    const { Svg, clickable, onClick, className = ""} = props

    const icon = <Svg className={`icon ${ className }` }  /> 

    if(clickable) {
        return (
            <button className={ className } type="button" onClick={onClick}>

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