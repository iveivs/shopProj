import { CardItem } from "@/components/CardItem";
import { ProductLayout } from "@/layouts/ProductLayout";
import {
    getPizzas,
    getPizzasError,
    getPizzasLoading,
} from "@/redux/pizzas/selectors/pizzasSelectors";
import { fetchPizzas } from "@/redux/pizzas/services/fetchPizzas";
import { calcMinPricePizzas } from "@/utils/calcMinPrice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const PizzasPage = () => {
    const pizzas = useSelector(getPizzas);
    const error = useSelector(getPizzasError);
    const loading = useSelector(getPizzasLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPizzas());
    }, [dispatch]);

    if (error) {
        return <div>{error}</div>;
    }

    const item = pizzas.map((el) => {
        const minPrice = calcMinPricePizzas(el.sizes, el.dought)
        return (
            <CardItem
                id={el.id}
                key={el.id}
                product={el.product}
                img={el.photo}
                title={el.name}
                ingredients={el.ingredients}
            />
        );
    });

    return <ProductLayout header={"Пиццы"} items={pizzas} />;
};

export default PizzasPage;
