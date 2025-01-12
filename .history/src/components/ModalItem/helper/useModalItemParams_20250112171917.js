import { getProductItem } from "@/redux/productItem/selectors/productItemSelectors"
import { useSelector } from "react-redux"

export const useModalItemParams = () => {
    const product = useSelector(getProductItem)

    return {
        
    }
}