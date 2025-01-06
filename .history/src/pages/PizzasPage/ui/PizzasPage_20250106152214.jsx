import { useEffect } from "react";
import { useDispatch } from "react-redux";

const PizzasPage = () => {
    const dispatch =  useDispatch()

    useEffect(() => {
        dispatch(fet)
    }, [])
    return <p>PizzasPage</p>;
};

export default  PizzasPage ;
