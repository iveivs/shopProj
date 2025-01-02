import classNames from "classnames"
import { NavLink } from "react-router-dom"

const AppLink = (props) => {
    const { children, to, className = "" } = props
  return (
    <NavLink className={classNames(cl)} to={to}>{children}</NavLink>
  )
}

export {AppLink}