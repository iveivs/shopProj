import cls from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={cls.footer}>
            <div className={cls.container}>
            <div className={cls.content}>
                <div className={cls.logo}></div>
                
            </div>
            </div>
        </footer>
    )
}

export { Footer }