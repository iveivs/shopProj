import { Icon } from "@/ui/Icon"
import { Link } from "react-router-dom"
import cls from "./NavbarItems.module.scss"

const NavbarItems = ({ item }) => {
  return (
    < Link to={}>
        <Icon Svg={item.Icon}/>
        <span className={cls.text}>{item.text}</span>
    </Link>
  )
}

export  { NavbarItems }