import { CardItem } from "@/components/CardItem";
import cls from "./ProductTape.module.scss";
import { productsName } from "@/const/const";
const ProductTape = (props) => {
    const {
        title,
        products = [],
        isLoading = false,
        error = undefined,
    } = props;

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const items = products.map((el) => {
        const props = {
            id: el.id,
            img: el.photo,
            title: el.name,
            key: el.id,
            product: el.product,
        };
        switch (el.product) {
            case productsName.PIZZAS:
                return <CardItem {...props} ingredients={el.ingredients} key={props.} />;
            case productsName.ROLLS:
                return <CardItem {...props} ingredients={el.ingredients} />;
            case productsName.OTHERS:
                return <CardItem {...props} />;

            default:
                null;
        }
    });
    return (
        <section className={cls.products}>
            <h2 className={cls.title}>{title}</h2>

            {error && (
                <div className={cls.error}>
                    Не удалось получить список товаров. Зайдите чуть позже!
                </div>
            )}

            <div className={cls.card}>{items}</div>
        </section>
    );
};

export { ProductTape };
