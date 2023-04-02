import React, {useCallback} from 'react';
import {ICatalogProduct, TypeSize} from "../../../models/ICatalogProduct";
import styles from "./admin-product.module.scss"
import {Button} from "../../../UI/Button/Button";

type Props = {
    product: ICatalogProduct,
    onEdit: () => void,
    onRemove: () => void,
};
export const AdminProduct = (props: Props) => {
    const displayProduct = useCallback(() => {
        const fields: JSX.Element[] = [];
        for (let key in props.product) {
            const value = props.product[key as keyof typeof props.product] as string & string[] & TypeSize;

            if (key === 'productImageUrl') {
                fields.unshift(<img className={styles.img} src={value.toString()} alt="img"/>)
            } else if (key === 'types') {
                fields.push(<p className={styles.text}>{key}: <span className={styles.text_value}>{value.map(item =>
                    <span>{item}</span>)}</span>
                </p>)

            } else {
                fields.push(<p className={styles.text}>{key}: <span className={styles.text_value}>{value}</span></p>)
            }
        }
        return fields;
    }, [])


    const editProductHandler = () => {
        props.onEdit();
    };

    const deleteProductHandler = () => {
        props.onRemove();
    };

    return (
        <li className={styles.item}>
            {displayProduct().map((item) => item)}
            <div className={styles.btns}>
                <Button isRounded={false} title={"Изменить"} onClick={editProductHandler} class={styles.btn_edit}/>
                <Button isRounded={false} title={"Удалить"} onClick={deleteProductHandler} class={styles.btn_remove}/>
            </div>
        </li>
    );
};