import { getPizzas, getPizzasError, getPizzasLoading } from "@/redux/pizzas/selectors/pizzasSelectors";
import { fetchPizzas } from "@/redux/pizzas/services/fetchPizzas";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const PizzasPage = () => {
    const pizzas = useSelector(getPizzas)
    const error = useSelector(getPizzasError)
    const loading = useSelector(getPizzasLoading)
    const dispatch =  useDispatch()

    useEffect(() => {
        dispatch(fetchPizzas())
    }, [dispatch])
    
    if(error)
    return <p>PizzasPage</p>;
};

export default  PizzasPage ;
