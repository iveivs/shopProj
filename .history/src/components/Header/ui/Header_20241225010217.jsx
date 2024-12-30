import cls from "./Header.module.scss"
import { pizzaIcon} from '@/assets/img/logoPizza.svg'
const Header = () => {
    return (
        <header className={cls.header}>
            <div className={cls.container}>
                <div className={cls.content}>
                    <div className={cls.logo}>
                        <pizzaIcon />
                    </div>
                    <div className={cls.buttons}></div>

                </div>
            </div>
        </header>
    )
}
export { Header }