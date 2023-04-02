import React, {memo, useCallback, useState} from 'react';
import {Button} from "../../UI/Button/Button";
import styles from "./trash-button.module.scss";
import trashImage from "../../assets/decor/helpers/trash-little.svg";
import {ICatalogProduct} from "../../models/ICatalogProduct";
import {useDispatch} from "react-redux";
import {addTrashProductAction, addTrashProductsAction} from "../../store/reducers/Trash/TrashActions";
import {Message} from "../Message/Message";

type Props = {
    class?: string,
    count: number,
    product: ICatalogProduct,
    disabled?: boolean,
};
export const TrashButton = memo((props: Props) => {
    const dispatch = useDispatch();
    const [showMessage, setShowMessage] = useState(false);
    const addProductHandler = useCallback(() => {
        if (props.count === 1) {
            dispatch(addTrashProductAction(props.product));
        } else {
            dispatch(addTrashProductsAction({
                count: props.count,
                product: props.product,
            }))
        }
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 3000);
    }, [props.count, props.product]);
    return (
        <>
            <Button
                disabled={props.disabled}
                onClick={addProductHandler}
                class={`${props.class || ''}`}
                imageClass={styles.button}
                title={'В корзину'}
                urlImage={trashImage}
                isRounded={false}
            />
            <Message
                isShow={showMessage}
                type={'success'}
                message={'Товар добавлен в корзину, перейдите, чтоб оформить заказ'}/>
        </>
    );
});