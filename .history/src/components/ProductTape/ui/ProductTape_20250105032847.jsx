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
        switch (el.product) {
            case productsName.PIZZAS:
                return (
                    <CardItem
                        id={el.id}
                        img={el.photo}
                        title={el.name}
                        key={el.id}
                        product={el.product}
                    />
                );
            case productsName:
                return (
                    <CardItem
                        id={el.id}
                        img={el.photo}
                        title={el.name}
                        key={el.id}
                        product={el.product}
                    />
                );
            case "other":
                return (
                    <CardItem
                        id={el.id}
                        img={el.photo}
                        title={el.name}
                        key={el.id}
                        product={el.product}
                    />
                );

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

            <div className={cls.card}>
                {products.map((el) => (
                    <CardItem
                        id={el.id}
                        img={el.photo}
                        title={el.name}
                        key={el.id}
                        product={el.product}
                    />
                ))}
            </div>
        </section>
    );
};

export { ProductTape };
