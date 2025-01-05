import { Button } from "@/ui/Button";
import cls from "./CardItem.module.scss";

const CardItem = (props) => {
    const { id, img = '', title = '', product = '', ingredients = [] } = props;

    const ingredientsText = ingredients.join(", ")

    return (
        <article className={cls.card} >
            <img className={cls.img} src={img} />

            <div className={cls.body}>
                <div className={cls.info}>
                    <p className={cls.title}>{title}</p>
                    <span className={cls.text}></span>
                </div>
            </div>

            
        </article>
    );
};

export { CardItem };
