import {ICatalogProduct} from "../../../models/ICatalogProduct";
import styles from "./product.module.scss"
import boxImage from "../../../assets/decor/types/box.svg"
import bottleImage from "../../../assets/decor/types/bottle.svg"
import {Link} from "react-router-dom";
import React from "react";
import {TrashButton} from "../../TrashButton/TrashButton";
import {SrOnly} from "../../../UI/SrOnly/SrOnly";
import {CURRENCY} from "../../../constants/info";

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
                    <span>{props.product.price}</span> {CURRENCY}
                </div>
                <TrashButton
                    class={styles.btn}
                    product={props.product}
                    count={1}
                />
                <Link to={`${props.product.id}`} className={styles.link}>
                    <SrOnly>Перейти на страницу
                        товара</SrOnly>
                </Link>
            </div>
        </li>
    );
};