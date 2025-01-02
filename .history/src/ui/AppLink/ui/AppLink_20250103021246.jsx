import { NavLink } from "react-router-dom"

const AppLink = (props) => {
    const { children, to, className = "" } = props
  return (
    <NavLink className={} to={to}>{children}</NavLink>
  )
}

export {AppLink}