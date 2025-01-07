const RollsPage = () => {
    const pizzas = useSelecto(getPizzas);
    const error = useSelector(getPizzasError);
    const loading = useSelector(getPizzasLoading);
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
