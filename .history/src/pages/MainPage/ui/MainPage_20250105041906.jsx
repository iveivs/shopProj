import { useGetOthers, useGetPizzas, useGetRolls } from "@/api/rtkApi";
import { ProductTape } from "@/components/ProductTape";

const MainPage = () => {

    const { data: productsPizzas, isLoading: pizzasLoading, error: pizzasError } = useGetPizzas()
    const { data: productsRolls, isLoading: rollssLoading, error: rollsError } = useGetRolls()
    const { data: productsOthers, isLoading: othersLoading, error: othersError } = useGetOthers()

    return (
        <>
            <ProductTape title="Пиццы" products={productsPizzas} isLoading={pizzasLoading} error={pizzasError} />
            <ProductTape title="Пиццы" products={productsRolls} isLoading={isLoading} error={error} />
            <ProductTape title="Пиццы" products={data} isLoading={isLoading} error={error} />
        </>
    );
};

export default MainPage;
