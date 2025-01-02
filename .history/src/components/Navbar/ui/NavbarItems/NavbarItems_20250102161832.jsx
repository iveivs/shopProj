import { Icon } from "@/ui/Icon"
import { Link } from "react-router-dom"
import cls from "./NavbarItems.module.scss"

function NavbarItems({ item }) {
  return (
    < Link>
        <Icon Svg={item.Icon}/>
        <span className={cls.}></span>
    </Link>
  )
}

export  { NavbarItems }