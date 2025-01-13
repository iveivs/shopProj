import { Button } from "@/ui/Button";
import cls from "./ModalItemLayout.module.scss";
import { useDispatch } from "react-redux";
const ModalItemLayout = (props) => {
    const { params, price, options } = props;

    const dispatch =  useDispatch()

    const onClick = () => {
        dispatch()
    }
    return (
        <div className={cls.body}>
            <img src={params.img} className={cls.img} />
            <div className={cls.content}>
                <h3 className={cls.title}>{params.title}</h3>

                {options && options}

                <div className={cls.footer}>
                    <span className={cls.price}> Итого {price} руб.</span>
                    <Button border className={cls.button}>
                        Добавить
                    </Button>
                </div>
            </div>
        </div>
    );
};

export { ModalItemLayout };
