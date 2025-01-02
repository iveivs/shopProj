import { Icon } from "@/ui/Icon";
import cls from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={cls.footer}>
            <div className={cls.container}>
                <div className={cls.content}>
                    <div className={cls.logo}>
                        <Icon />
                    </div>
                    <p>Copyright 2025 - result pizza</p>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
