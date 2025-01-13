import cls from "./Header.module.scss";
import PizzaIcon from "@/assets/img/logoPizza.svg";
import ToggleIcon from "@/assets/img/toggleTheme.svg";
import CartIcon from "@/assets/img/cart.svg";
import { Button } from "@/ui/Button";
import { Icon } from "@/ui/Icon";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/assets/hooks/useThem";
import { Modal } from "@/ui/Modal";
import { useContext, useState } from "react";
import { BasketItem } from "@/components/BasketItem";
import { useSelector } from "react-redux";
import { getBasketTotalPrice } from "@/redux/basket/selectors/basketSelectors";
import { LayoutContext } from "@/providers/LayoutContextProvider";

const Header = () => {
    const navigate = useNavigate();

    const {popup} =  useContext(LayoutContext)

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen((prev) => !prev);

    const totalPrice = useSelector(getBasketTotalPrice)

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
                            <Icon Svg={PizzaIcon} clickable onClick={onClick} />
                            <p>Result Pizza</p>
                        </div>
                        <div className={cls.buttons}>
                            <Icon
                                Svg={ToggleIcon}
                                clickable
                                onClick={onToggleThemeHolder}
                            />
                            <Button
                                onClick={handleClick}
                                border
                                className={cls.button}
                            >
                                <Icon Svg={CartIcon} />
                                <span>{totalPrice} р.</span>
                            </Button>
                        </div>
                    </div>
                    {popup && }
                </div>
            </header>

            <Modal
                variant={"rightModal"}
                width={420}
                scroll={"auto"}
                height={"100%"}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            >
                {/* <BasketItem  /> */}
                <div className={cls.body}>
                    <BasketItem />

                    <div className={cls.footer}>
                        <div className={cls.totalPrice}>
                            <span>Итого: {totalPrice} Р</span>
                        </div>

                        <Button>Оформить заказ</Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};
export { Header };
