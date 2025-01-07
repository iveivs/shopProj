import { getRolls, getRollsError, getRollsLoading } from "@/redux/rolls/selectors/rollsSelectors";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

const RollsPage = () => {
    const pizzas = useSelector(getRolls);
    const error = useSelector(getRollsError);
    const loading = useSelector(getRollsLoading);
    const dispatch = useDispatch();

    const { ref, inView } = useInView({
        threshold: 1,
    });

    useEffect(() => {
        if(!error) {
            dispatch(fetchNextPizzasPage());
        }
    }, [dispatch, error, inView]);

    if (error) {
        return <div>{error}</div>;
    }

    const item = pizzas.map((el) => {
        const minPrice = calcMinPricePizzas(el.sizes, el.doughs);
        return (
            <CardItem
                id={el.id}
                key={el.id}
                product={el.product}
                img={el.photo}
                title={el.name}
                ingredients={el.ingredients}
                price={minPrice}
            />
        );
    });

    return (
        <>
            <ProductLayout header={"Пиццы"} item={item} />;
            {!loading && <div ref={ref}></div>}
        </>
    );
};

export default  RollsPage ;
