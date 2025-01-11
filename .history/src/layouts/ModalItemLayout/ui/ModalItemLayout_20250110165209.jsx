import { Button } from "@/ui/Button";
import cls from "./ModalItemLayout.module.scss";
const ModalItemLayout = (props) => {
    const { params } = props;
    return (
        <div className={cls.body}>
            {/* <img src={params.img} className={cls.img} /> */}
            <div className={cls.content}>
                <h3 className={cls.title}>{params.title}</h3>
                <div></div>
                <div className={cls.footer}>
                    <span className={cls.price}></span>
                    <Button border className={cls.button}>
                        Добавить
                    </Button>
                </div>
            </div>
        </div>
    );
};

export { ModalItemLayout };
