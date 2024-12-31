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
    
    const { toggleTheme } =  useTheme()

    const onToggleThemeHolder = () => {
        toggleTheme()
    }

    return (
        <header className={cls.header}>
            <div className={cls.container}>
                <div className={cls.content}>
                    <div className={cls.logo}>
                        {/* <PizzaIcon /> */}

                        <Icon Svg={PizzaIcon} clickable onClick={ onClick }  />
                        <p>Result Pizza</p>
                    </div>
                    <div className={cls.buttons}>
                        {/* <ToggleIcon /> */}
                        <Icon Svg={ToggleIcon} clickable onClick={onToggleThemeHolder}/>
                        {/* <CartIcon /> */}
                        <Button border className={cls.button}>
                            <Icon Svg={CartIcon} />
                            <span>0 р.</span>
                        </Button>
                    </div>

                </div>
            </div>
        </header>
    )
}
export { Header }