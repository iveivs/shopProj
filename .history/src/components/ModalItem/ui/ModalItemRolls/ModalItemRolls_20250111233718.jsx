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

    const quantityRoll = useSelector(getProductItemRollQuantity);

    useEffect(() => {
        if (productsName.PIZZAS === product.product && isOpen) {
            dispatch(productActions.setSize(product.sizes[0]));
            dispatch(productActions.setType(product.doughs[0]));
        }
    }, [dispatch, isOpen, product]);

    useEffect(() => {
        if (
            productsName.PIZZAS === product.product &&
            isOpen &&
            sizePizza &&
            typePizza
        ) {
            dispatch(
                productActions.setPrice(sizePizza.price + typePizza.price)
            );
        }
    }, [dispatch, isOpen, product, sizePizza, typePizza]);

    const handleClickSize = (size) => {
        dispatch(productActions.setSize(size));
    };
    const handleClickType = (type) => {
        dispatch(productActions.setType(type));
    };

    const options = (
        <div className={cls.options}>
            <div className={cls.block}>
                <p>Тип теста</p>

                <div className={cls.item}>
                    {product.doughs.map((type, i) => {
                        return (
                            <Button
                                border
                                variant={"clear"}
                                key={i}
                                active={typePizza === type}
                                onClick={() => handleClickType(type)}
                            >
                                {type.name}
                            </Button>
                        );
                    })}
                </div>
            </div>

            <div className={cls.block}>
                <p>Размеры</p>

                <div className={cls.item}>
                    {product.sizes.map((size, i) => {
                        return (
                            <Button
                                border
                                variant={"clear"}
                                key={i}
                                active={sizePizza === size}
                                onClick={() => handleClickSize(size)}
                            >
                                {size.name}
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
