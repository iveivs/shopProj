import classNames from "classnames"
import { NavLink } from "react-router-dom"

const AppLink = (props) => {
    const { children, to, className = "", active } = props
  return (
    <NavLink className={classNames(className)} to={to}>{children}</NavLink>
  )
}

export {AppLink}