import { Button } from "@/ui/Button";
import cls from "./CardItem.module.scss";

const CardItem = (props) => {
    const { id, img = '', title = '', product = '', ingredients = [] } = props;

    const ingredientsText = ingredients.join(", ")

    console.log(ingredientsText);
    return (
        <article className={cls.card} >
            <img className={cls.img} src={img} />

            <div className={cls.body}>
                <div className={cls.info}>
                    <p className={cls.title}>{title}</p>
                    <span className={cls.text}></span>
                </div>
            </div>

            <div className={cls.footer}>
                <Button border className={cls.button}>
                    Выбрать
                </Button>
                <span>от 0 Р</span>
            </div>
        </article>
    );
};

export { CardItem };
