import { productsName } from "@/const/const";
import { ModalItemLayout } from "@/layouts/ModalItemLayout";

import { productActions } from "@/redux/productItem/slice/productItemSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cls from "./../ModalItem/ModalItem.module.scss";
import { Button } from "@/ui/Button";
import { getProductItemRollQuantity } from "@/redux/productItem/selectors/productItemSelectors";
import { useModalItemParams } from "../../helper/useModalItemParams";

const ModalItemRolls = (props) => {
    const { isOpen, product, price } = props;

    const params = useModalItemParams()

    const dispatch = useDispatch();

    const quantityRolls = useSelector(getProductItemRollQuantity);

    useEffect(() => {
        if(isOpen) {
            dispatch(productActions.clearProduct())
            if (productsName.ROLLS === product.product) {
                dispatch(productActions.setQuantity(product.pieces[0]));
            }
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
                                active={quantityRolls === quantity}
                                onClick={() => handleClickQuantity(quantity)}
                            >
                                {quantity.name}
                            </Button>
                        );
                    })}
                </div>
            </div>

        </div>
    );

    const newParams = {
        ...params,
        size: quantityRolls.name,
    }

    return <ModalItemLayout price={price} params={newParams} options={options} />;
};

export { ModalItemRolls };
