import { CardItem } from "@/components/CardItem";
import cls from "./ProductTape.module.scss";
import { productsName } from "@/const/const";
import { calcMinPricePizzas } from "@/utils/calcMinPrice";
import { CardItemSkeleton } from "@/components/CardItem/ui/CardItemSkeleton";
import { Skeleton } from "@/ui/Skeleton";

export const getSkeleton = () => {
    <section className={cls.products}>
        <h2 className={cls.title}>
            <Skeleton width={500} height={50} />
        </h2>

        <div className={cls.card}>
            {new Array(4).fill(0).map((_, i) => (
                <CardItemSkeleton key={i} />
            ))}
        </div>
    </section>;
};

const ProductTape = (props) => {
    const {
        title,
        products = [],
        isLoading = false,
        error = undefined,
    } = props;

    if (isLoading) {
        return getSkeleton();
    }

    console.log("HELLO 2");

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
                const minPricePizzas = calcMinPricePizzas(el.sizes, el.doughs);

                return (
                    // <CardItem
                    //     {...props}
                    //     ingredients={el.ingredients}
                    //     key={props.key}
                    //     price={minPricePizzas}
                    // />
                    <CardItemSkeleton  />
                );
            case productsName.ROLLS:
                const prices = el.pieces.map((el) => el.price);

                const minPriceRolls = Math.min(...prices);
                return (
                    <CardItem
                        {...props}
                        ingredients={el.ingredients}
                        key={props.key}
                        price={minPriceRolls}
                    />
                );
            case productsName.OTHERS:
                return (
                    <CardItem
                        {...props}
                        key={props.key}
                        description={el.description}
                        price={el.prise}
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

            <div className={cls.card}>{items}</div>
        </section>
    );
};

export { ProductTape };
