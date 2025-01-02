import { NavLink } from "react-router-dom"

const AppLink = (props) => {
    const { children, to } = props
  return (
    <NavLink to={}>{children}</NavLink>
  )
}

export {AppLink}