import cls from "./Header.module.scss"
import PizzaIcon from '@/assets/img/logoPizza.svg'
import ToggleIcon from '@/assets/img/toggleTheme.svg'
import CartIcon from '@/assets/img/cart.svg'

const Header = () => {
    return (
        <header className={cls.header}>
            <div className={cls.container}>
                <div className={cls.content}>
                    <div className={cls.logo}>
                        <PizzaIcon />
                    </div>
                    <div className={cls.buttons}>
                        <ToggleIcon />
                        <CartIcon />
                    </div>

                </div>
            </div>
        </header>
    )
}
export { Header }