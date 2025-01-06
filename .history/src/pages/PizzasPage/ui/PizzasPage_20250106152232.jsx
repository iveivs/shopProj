import { fetchPizzas } from "@/redux/pizzas/services/fetchPizzas";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const PizzasPage = () => {
    const dispatch =  useDispatch()

    useEffect(() => {
        dispatch(fetchPizzas)
    }, [dispatch])
    return <p>PizzasPage</p>;
};

export default  PizzasPage ;
