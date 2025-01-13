import cls from "./Header.module.scss"
import PizzaIcon from '@/assets/img/logoPizza.svg'
import ToggleIcon from '@/assets/img/toggleTheme.svg'
import CartIcon from '@/assets/img/cart.svg'
import { Button } from "@/ui/Button"
import { Icon } from "@/ui/Icon"
import { useNavigate } from "react-router-dom"
import { useTheme } from "@/assets/hooks/useThem"

const Header = () => {
    const navigate = useNavigate()
    const onClick = () => {
        navigate('/')
    }
    
    const { toggleTheme, theme } =  useTheme()

    const onToggleThemeHolder = () => {
        toggleTheme()
    }

    return (
        <>
        </>
    )
}
export { Header }