import cls from "./Header.module.scss"
import PizzaIcon from '@/assets/img/logoPizza'
const Header = () => {
    return (
        <header className={cls.header}>
            <div className={cls.container}>
                <div className={cls.content}>
                    <div className={cls.logo}></div>
                    <div className={cls.buttons}></div>

                </div>
            </div>
        </header>
    )
}
export { Header }