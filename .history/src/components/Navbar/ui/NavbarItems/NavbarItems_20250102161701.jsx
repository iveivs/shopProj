import { Icon } from "@/ui/Icon"
import { Link } from "react-router-dom"
import 

function NavbarItems({ item }) {
  return (
    < Link>
        <Icon Svg={item.Icon}/>
    </Link>
  )
}

export  { NavbarItems }