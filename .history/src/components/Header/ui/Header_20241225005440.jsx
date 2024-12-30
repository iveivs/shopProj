import cls from "./Header.module.scss"
const Header = () => {
    return (
        <header className={cls.header}>
            <div className={cls.container}>
                <div className={cls.content}></div>
                <div className="buttons"></div>
            </div>
        </header>
    )
}
export { Header }