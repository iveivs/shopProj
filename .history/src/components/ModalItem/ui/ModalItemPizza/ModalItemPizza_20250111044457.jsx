import { productsName } from "@/const/const";
import { ModalItemLayout } from "@/layouts/ModalItemLayout";
import { getProductItemPizzaSize, getProductItemPizzaType } from "@/redux/productItem/selectors/productItemSelectors";
import { productActions } from "@/redux/productItem/slice/productItemSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cls from "../ModalItem/ModalItem.module.scss"

const ModalItemPizza = (props) => {
    const { isOpen, product} = props

    const dispatch = useDispatch()

    const sizePizza = useSelector(getProductItemPizzaSize)
    const typePizza = useSelector(getProductItemPizzaType)

    useEffect(() => {
        if(productsName.PIZZAS === product.product && isOpen) {
            dispatch(productActions.setPrice(product.sizes[0]))
            dispatch(productActions.setType(product.doughs[0]))
        }
    }, [dispatch, isOpen, product])

    const options = (
        <div className={cls.options}>
            <div className={cls.block}>
                <p></p>
            </div>
        </div>

    )
    

    const newParams = {
        id: product.id,
        product: product.product,
        img: product.photo,
        title: product.name,
    }

    console.log('product', product);
    return <ModalItemLayout params={newParams} />;
};

export { ModalItemPizza };
