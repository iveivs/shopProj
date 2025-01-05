import { useGetPizzas } from "@/api/rtkApi";
import { ProductTape } from "@/components/ProductTape";

const MainPage = () => {

    const { data: pi, isLoading, error } = useGetPizzas()

    return (
        <>
            <ProductTape title="Пиццы" products={data} isLoading={isLoading} error={error} />
        </>
    );
};

export default MainPage;
