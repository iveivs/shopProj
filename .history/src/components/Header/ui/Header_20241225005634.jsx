import cls from "./Header.module.scss"

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