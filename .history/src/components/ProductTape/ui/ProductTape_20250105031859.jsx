import { CardItem } from "@/components/CardItem";
import cls from "./ProductTape.module.scss";
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
                    <CardItem id={el.id}  />
                ))}
            </div>
        </section>
    );
};

export { ProductTape };
