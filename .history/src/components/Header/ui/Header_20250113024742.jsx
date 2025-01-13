import cls from "./Header.module.scss";
import PizzaIcon from "@/assets/img/logoPizza.svg";
import ToggleIcon from "@/assets/img/toggleTheme.svg";
import CartIcon from "@/assets/img/cart.svg";
import { Button } from "@/ui/Button";
import { Icon } from "@/ui/Icon";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/assets/hooks/useThem";
import { Modal } from "@/ui/Modal";
import { useState } from "react";

const Header = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => setIsOpen((prev) => !prev)

    const onClick = () => {
        navigate("/");
    };

    const { toggleTheme, theme } = useTheme();

    const onToggleThemeHolder = () => {
        toggleTheme();
    };

    return (
        <>
            <header className={cls.header}>
                <div className={cls.container}>
                    <div className={cls.content}>
                        <div className={cls.logo}>
                            {/* <PizzaIcon /> */}

                            <Icon Svg={PizzaIcon} clickable onClick={onClick} />
                            <p>Result Pizza</p>
                        </div>
                        <div className={cls.buttons}>
                            {/* <ToggleIcon /> */}
                            <Icon
                                Svg={ToggleIcon}
                                clickable
                                onClick={onToggleThemeHolder}
                            />
                            {/* <CartIcon /> */}
                            <Button onClick={} border className={cls.button}>
                                <Icon Svg={CartIcon} />
                                <span>0 р.</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <Modal
                variant={"rightModal"}
                width={420}
                height={"100%"}
                scroll={auto}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            ></Modal>
        </>
    );
};
export { Header };
