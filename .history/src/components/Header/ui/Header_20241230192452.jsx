import cls from "./Header.module.scss"
import PizzaIcon from '@/assets/img/logoPizza.svg'
import ToggleIcon from '@/assets/img/toggleTheme.svg'
import CartIcon from '@/assets/img/cart.svg'
import { Button } from "@/ui/Button"
import { Icon } from "@/ui/Icon"

const Header = () => {
    const onClick = () {
        Navigate
    }

    return (
        <header className={cls.header}>
            <div className={cls.container}>
                <div className={cls.content}>
                    <div className={cls.logo}>
                        <PizzaIcon />

                        <Icon Svg={PizzaIcon} clickable />
                        <p>Result Pizza</p>
                    </div>
                    <div className={cls.buttons}>
                        <ToggleIcon />
                        <CartIcon />
                        <Button >
                            Im Button
                        </Button>
                    </div>

                </div>
            </div>
        </header>
    )
}
export { Header }