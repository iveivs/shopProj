import { Icon } from "@/ui/Icon"
import { Link } from "react-router-dom"
import cls from "./"

function NavbarItems({ item }) {
  return (
    < Link>
        <Icon Svg={item.Icon}/>
    </Link>
  )
}

export  { NavbarItems }