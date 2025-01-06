import { getPizzas } from "@/redux/pizzas/selectors/pizzasSelectors";
import { fetchPizzas } from "@/redux/pizzas/services/fetchPizzas";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const PizzasPage = () => {
    const pizzas = useSelector(getPizzas)
    const error = useSelector(getPizzas)
    const isLoading = useSelector(getPizzas)
    const dispatch =  useDispatch()

    useEffect(() => {
        dispatch(fetchPizzas)
    }, [dispatch])
    return <p>PizzasPage</p>;
};

export default  PizzasPage ;
