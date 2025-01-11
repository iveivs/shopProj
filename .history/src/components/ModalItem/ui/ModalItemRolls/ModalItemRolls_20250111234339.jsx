import { productsName } from "@/const/const";
import { ModalItemLayout } from "@/layouts/ModalItemLayout";

import { productActions } from "@/redux/productItem/slice/productItemSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cls from "./../ModalItem/ModalItem.module.scss";
import { Button } from "@/ui/Button";
import { getProductItemRollQuantity } from "@/redux/productItem/selectors/productItemSelectors";

const ModalItemRolls = () => {
    const { isOpen, product, price } = props;

    const dispatch = useDispatch();

    const quantityRolls = useSelector(getProductItemRollQuantity);

    useEffect(() => {
        if (productsName.ROLLS === product.product && isOpen) {
            dispatch(productActions.setQuantity(product.pieces[0]));
        }
    }, [dispatch, isOpen, product]);

    useEffect(() => {
        if (productsName.ROLLS === product.product && isOpen && quantityRolls) {
            dispatch(
                productActions.setPrice(quantityRolls.price)
            );
        }
    }, [dispatch, isOpen, product, quantityRolls]);

    const handleClickQuantity = (quantity) => {
        dispatch(productActions.setQuantity(quantity));
    };

    const options = (
        <div className={cls.options}>
            <div className={cls.block}>
                <p>Кол-во штук</p>

                <div className={cls.item}>
                    {product.pieces.map((quantity, i) => {
                        return (
                            <Button
                                border
                                variant={"clear"}
                                key={i}
                                active={q === type}
                                onClick={() => handleClickQuantity(quantity)}
                            >
                                {type.name}
                            </Button>
                        );
                    })}
                </div>
            </div>

        </div>
    );

    const newParams = {
        id: product.id,
        product: product.product,
        img: product.photo,
        title: product.name,
        price: price,
    };

    console.log("product", product);
    return <ModalItemLayout params={newParams} options={options} />;
};

export { ModalItemRolls };
