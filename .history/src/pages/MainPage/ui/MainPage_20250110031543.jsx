import { useGetOthers, useGetPizzas, useGetRolls } from "@/api/rtkApi";
import { ProductTape } from "@/components/ProductTape";
// import { LayoutContext } from "@/providers/LayoutContextProvider";
// import { Modal } from "@/ui/Modal";
// import { useContext } from "react";

const MainPage = () => {

    const { data: productsPizzas, isLoading: pizzasLoading, error: pizzasError } = useGetPizzas()
    const { data: productsRolls, isLoading: rollssLoading, error: rollsError } = useGetRolls()
    const { data: productsOthers, isLoading: othersLoading, error: othersError } = useGetOthers()

    // const { isOpen, setIsOpen } = useContext(LayoutContext)

    return (
        <>
            {/* < Modal isOpen={isOpen} setIsOpen={setIsOpen} width={500} height={200}>
                HELLO
            </Modal> */}
            <ProductTape title="Пиццы" products={productsPizzas} isLoading={pizzasLoading} error={pizzasError} />
            <ProductTape title="Роллы" products={productsRolls} isLoading={rollssLoading} error={rollsError} />
            <ProductTape title="Прочие товары" products={productsOthers} isLoading={othersLoading} error={othersError} />
        </>
    );
};

export default MainPage;
