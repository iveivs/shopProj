import { NavLink } from "react-router-dom"

const AppLink = (props) => {
    const { children } = props
  return (
    <NavLink>{children}</NavLink>
  )
}

export {AppLink}