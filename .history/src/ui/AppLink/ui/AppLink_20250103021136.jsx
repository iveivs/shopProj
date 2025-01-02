import { NavLink } from "react-router-dom"

const AppLink = (props) => {
    const { children } = props
  return (
    <NavLink>{children}</Nav>
  )
}

export {AppLink}