import { Icon } from "@/ui/Icon";
import cls from "./Footer.module.scss";
import PizzaIcon from '@'

const Footer = () => {
    return (
        <footer className={cls.footer}>
            <div className={cls.container}>
                <div className={cls.content}>
                    <div className={cls.logo}>
                        <Icon />
                        <p>Result Pizza</p>
                    </div>
                    <p>Copyright 2025 - result pizza</p>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
