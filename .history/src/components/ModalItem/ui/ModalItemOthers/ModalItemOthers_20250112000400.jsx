import { productsName } from "@/const/const";
import { ModalItemLayout } from "@/layouts/ModalItemLayout";

import { productActions } from "@/redux/productItem/slice/productItemSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { getProductItemRollQuantity } from "@/redux/productItem/selectors/productItemSelectors";

const ModalItemOthers = (props) => {
    const { isOpen, product, price } = props;

    const dispatch = useDispatch();

    // useEffect(() => {
    //     if(isOpen) {
    //         dispatch(productActions.clearProduct())
    //         if (productsName.ROLLS === product.product) {
    //             dispatch(productActions.setQuantity(product.pieces[0]));
    //         }
    //     }
    // }, [dispatch, isOpen, product]);

    useEffect(() => {
        if (productsName.ROLLS === product.product && isOpen ) {
            dispatch(
                productActions.setPrice(quantityRolls.price)
            );
        }
    }, [dispatch, isOpen, product]);    

    const newParams = {
        id: product.id,
        product: product.product,
        img: product.photo,
        title: product.name,
        price: price,
    };

    return <ModalItemLayout params={newParams} />;
};

export { ModalItemOthers };
