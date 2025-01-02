import { NavLink } from "react-router-dom"

const AppLink = (props) => {
    const { children, to, Cl } = props
  return (
    <NavLink to={to}>{children}</NavLink>
  )
}

export {AppLink}