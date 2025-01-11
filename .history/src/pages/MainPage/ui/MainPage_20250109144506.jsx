import { useGetOthers, useGetPizzas, useGetRolls } from "@/api/rtkApi";
import { ProductTape } from "@/components/ProductTape";
import { Modal } from "@/ui/Modal";

const MainPage = () => {

    const { data: productsPizzas, isLoading: pizzasLoading, error: pizzasError } = useGetPizzas()
    const { data: productsRolls, isLoading: rollssLoading, error: rollsError } = useGetRolls()
    const { data: productsOthers, isLoading: othersLoading, error: othersError } = useGetOthers()

    return (
        <>
            < Modal>
            
            </Modal>
            <ProductTape title="Пиццы" products={productsPizzas} isLoading={pizzasLoading} error={pizzasError} />
            <ProductTape title="Роллы" products={productsRolls} isLoading={rollssLoading} error={rollsError} />
            <ProductTape title="Прочие товары" products={productsOthers} isLoading={othersLoading} error={othersError} />
        </>
    );
};

export default MainPage;
