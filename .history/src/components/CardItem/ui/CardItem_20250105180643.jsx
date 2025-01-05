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
                    <span>от {price} Р</span>
                    {product === productsName. }
                </div>
            </div>
        </article>
    );
};

export { CardItem };
