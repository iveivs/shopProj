import { Button } from "@/ui/Button";
import cls from "./CardItem.module.scss";
import { productsName } from "@/const/const";

const CardItem = (props) => {
    const {
        id,
        img = "",
        title = "",
        product = "",
        ingredients = [],
        description = "",
        price = 0,
    } = props;

    const ingredientsText = ingredients.join(", ");

    return (
        <article className={cls.card}>
            <img className={cls.img} src={img} />

            <div className={cls.body}>
                <div className={cls.info}>
                    <p className={cls.title}>{title}</p>
                    <span className={cls.text}>
                        {product === productsName.OTHERS
                            ? description
                            : ingredientsText}
                    </span>
                </div>

                <div className={cls.footer}>
                    <Button border className={cls.button}>
                        Выбрать
                    </Button>
                    
                    {product === productsName.OTHERS ? <span>{price} P.</span> : <span> {price} P.</span> }
                </div>
            </div>
        </article>
    );
};

export { CardItem };
