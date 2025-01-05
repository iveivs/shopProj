import { useGetOthers, useGetPizzas, useGetRolls } from "@/api/rtkApi";
import { ProductTape } from "@/components/ProductTape";

const MainPage = () => {

    const { data: productsPizzas, isLoading: pizzasLoading, error: pizzasError } = useGetPizzas()
    const { data: productsRolls, isLoading: rollssLoading, error: rollsError } = useGetRolls()
    const { data: productsOthers, isLoading: othersLoading, error: othersError } = useGetOthers()

    return (
        <>
            <ProductTape title="Пиццы" products={productsPizzas} isLoading={pizzasLoading} error={pizzasError} />
            <ProductTape title="Пиццы" products={productsRolls} isLoading={rollssLoading} error={rollsError} />
            <ProductTape title="Пиццы" products={productsOthers} isLoading={othersLoading} error={othersError} />
        </>
    );
};

export default MainPage;
