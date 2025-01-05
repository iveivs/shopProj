import { Button } from "@/ui/Button";
import cls from "./CardItem.module.scss";

const CardItem = (props) => {
    const { id, img = '', title = '', product = '', ingredients = [], description = '' } = props;

    const ingredientsText = ingredients.join(", ")

    return (
        <article className={cls.card} >
            <img className={cls.img} src={img} />

            <div className={cls.body}>
                <div className={cls.info}>
                    <p className={cls.title}>{title}</p>
                    <span className={cls.text}>{}</span>
                </div>

                <div className={cls.footer}>
                <Button border className={cls.button}>
                    Выбрать
                </Button>
                <span>от 0 Р</span>
            </div>
            </div>

            
        </article>
    );
};

export { CardItem };
