import {ICatalogProduct} from "../../../models/ICatalogProduct";
import styles from "./product.module.scss"
import boxImage from "../../../assets/box.svg"
import bottleImage from "../../../assets/bottle.svg"
import {Button} from "../../../UI/Button/Button";
import trashImage from "../../../assets/trash-little.svg"
import {Link} from "react-router-dom";
import React from "react";

interface CatalogItemProps {
    product: ICatalogProduct,
    class?: string,
    isRow: boolean,
}

const checkValue = (value: number | string) => value ? value : 'Нет данных';
export const CatalogItem = (props: CatalogItemProps) => {
    return (
        <li className={`${props.class || ""} ${styles.product} ${props.isRow && styles.product_row}`}>
            <div className={styles.image}
                 style={{backgroundImage: `url(${props.product.productImageUrl})`}}>
            </div>
            <div className={styles.shell}>
                <div className={`${styles.size} ${props.product.typeSize === 'weight' ? styles.size_padding : ''}`}
                     style={{backgroundImage: `url(${props.product.typeSize !== 'weight' ? bottleImage : boxImage})`}}>
                    {props.product.size}
                </div>
                <div className={styles.title}>
                    <span className={styles.title_bold}>{props.product.brand} </span>
                    {props.product.name}
                </div>
                <ul className={styles.properties}>
                    <li className={styles.property}>
                        Штрихкод:<span className={styles.property_value}>{checkValue(props.product.barCode)}
                </span>
                    </li>
                    <li className={styles.property}>
                        Производитель:<span className={styles.property_value}>{checkValue(props.product.manufacturer)}
                </span>
                    </li>
                    <li className={styles.property}>
                        Бренд:<span className={styles.property_value}>{checkValue(props.product.brand)}
                </span>
                    </li>
                </ul>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.price}>
                    <span>{props.product.price}</span> ₸
                </div>
                <Button
                    imageClass={styles.button}
                    title={'В корзину'}
                    urlImage={trashImage}
                    isRounded={false}
                />
                <Link to={`/product/${props.product.id}`}>продукт</Link>
            </div>
        </li>
    );
};