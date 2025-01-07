import { CardItem } from "@/components/CardItem";
import { ProductLayout } from "@/layouts/ProductLayout";
import { getRolls, getRollsError, getRollsLoading } from "@/redux/rolls/selectors/rollsSelectors";
import { fetchNextRollsPage } from "@/redux/rolls/services/fetchNextRollsPage";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

const RollsPage = () => {
    const rolls = useSelector(getRolls);
    const error = useSelector(getRollsError);
    const loading = useSelector(getRollsLoading);
    
    const { ref, inView } = useInView({
        threshold: 1,
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if(!error) {
            dispatch(fetchNextRollsPage());
        }
    }, [dispatch, error, inView]);

    if (error) {
        return <div>{error}</div>;
    }

    const item = rolls.map((el) => {
        const prices = el.pieces.map(el => el.price)
        const minPriceRoll = Math.min
        return (
            <CardItem
                id={el.id}
                key={el.id}
                product={el.product}
                img={el.photo}
                title={el.name}
                ingredients={el.ingredients}
                
            />
        );
    });

    return (
        <>
            <ProductLayout header={"Роллы"} item={item} />;
            {!loading && <div ref={ref}></div>}
        </>
    );
};

export default  RollsPage ;
