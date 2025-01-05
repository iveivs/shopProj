import { useGetPizzas } from "@/api/rtkApi";
import { ProductTape } from "@/components/ProductTape";

const MainPage = () => {

    const { data, isLoading, error } = useGetPizzas()

    return (
        <>
            <ProductTape title="Пиццы" products={/>
        </>
    );
};

export default MainPage;
