import { useEffect } from "react";
import { useDispatch } from "react-redux";

const PizzasPage = () => {
    const dispatch =  useDispatch()

    useEffect(() => {
        dispatch()
    }, [])
    return <p>PizzasPage</p>;
};

export default  PizzasPage ;
