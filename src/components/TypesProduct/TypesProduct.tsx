import {TypeProduct} from "./TypeProduct/TypeProduct";
import styles from './types-product.module.scss'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {addProductAction, removeProductAction} from "../../store/reducers/Filters/TypesProduct/typesProductAction";


interface TypesProductProps {
    class?: string,
}

export const TypesProduct = (props: TypesProductProps) => {
    const types = useTypedSelector(state => state.typesProductReducer);
    const selectedTypesProduct = types.selectedTypesProduct;
    const dispatch = useDispatch();
    const isActive = (value: string) => selectedTypesProduct.includes(value);
    const toggleTypeProductHandler = (value: string) => {
        if (!isActive(value)) {
            dispatch(addProductAction(value));
        } else {
            dispatch(removeProductAction(value));
        }
    }
    return (
        <ul className={`${styles.list} ${props.class}`}>
            {types.typesProduct.map((typeProduct) =>
                <TypeProduct
                    value={typeProduct}
                    key={typeProduct}
                    onClick={toggleTypeProductHandler}
                    isActive={isActive(typeProduct)}
                />
            )}
        </ul>
    );
};