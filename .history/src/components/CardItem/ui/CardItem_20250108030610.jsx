import { Button } from "@/ui/Button";
import cls from "./CardItem.module.scss";
import { productsName } from "@/const/const";
import { useDispatch } from "react-redux";

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

    const dispatch = useDispatch()

    const ingredientsText = ingredients.join(", ");

    const onClick = () =

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
                    
                    {product === productsName.OTHERS ? <span>{price} P.</span> : <span> от {price} P.</span> }
                </div>
            </div>
        </article>
    );
};

export { CardItem };
