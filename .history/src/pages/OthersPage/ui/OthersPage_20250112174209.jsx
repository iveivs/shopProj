import { CardItem } from "@/components/CardItem";
import { ProductLayout } from "@/layouts/ProductLayout";
import { ProductLayoutSkeleton } from "@/layouts/ProductLayout/ui/ProductLayout";
import { LayoutContext } from "@/providers/LayoutContextProvider";
import { getOthers, getOthersError, getOthersLoading } from "@/redux/others/selectors/othersSelectors";
import { fetchNextOthersPage } from "@/redux/others/services/fetchNextOthersPage";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

const OthersPage = () => {
    const others = useSelector(getOthers);
    const error = useSelector(getOthersError);
    const loading = useSelector(getOthersLoading);
    const { handleClick } = useContext(LayoutContext)
    const dispatch = useDispatch();

    const { ref, inView } = useInView({
        threshold: 1,
    });

    useEffect(() => {
        if(!error) {
            dispatch(fetchNextOthersPage());
        }
    }, [dispatch, error, inView]);

    if (error) {
        return <div className="error">{error}</div>;
    }

    const item = others.map((el) => {

        return (
            <CardItem
                id={el.id}
                key={el.id}
                product={el.product}
                img={el.photo}
                title={el.name}
                description={el.description}
                price={el.price}
            />
        );
    });

    return (
        <>
            <ProductLayout header={"Прочие товары"} item={item} />;
            {loading &&  <ProductLayoutSkeleton  />}
            {!loading && <div ref={ref}></div>}
        </>
    );
};

export default  OthersPage ;
