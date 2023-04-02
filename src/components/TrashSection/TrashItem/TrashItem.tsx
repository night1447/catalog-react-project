import React, {useState} from 'react';
import styles from '../trash.module.scss'
import bottleImage from "../../../assets/decor/types/bottle.svg";
import boxImage from "../../../assets/decor/types/box.svg";
import {Counter} from "../../Counter/Counter";
import {DeleteButton} from "../../DeleteButton/DeleteButton";
import {useDispatch} from "react-redux";
import {
    addTrashProductAction,
    addTrashProductsAction,
    removePartTrashProductAction
} from "../../../store/reducers/Trash/TrashActions";
import {TrashItemType} from "../TrashSection";
import {CURRENCY} from "../../../constants/info";

type Props = {
    product: TrashItemType,
};
export const TrashItem = ({product}: Props) => {
        let item = product.product;
        const [count, setCount] = useState(product.count);
        const dispatch = useDispatch();
        const addCountHandler = () => {
            setCount(prevState => prevState + 1);
            dispatch(addTrashProductAction(product.product));

        };
        const removeCountHandler = () => {
            if (count > 1) {
                setCount(prevState => prevState - 1);
                dispatch(removePartTrashProductAction(product.product));
            } else {
                setCount(1);
            }

        };
        const replaceCountHandler = (value: number) => {
            setCount(value);
        }
        const setValueHandler = (value: number) => {
            dispatch(addTrashProductsAction({count: value, product: product.product}));
        }
        return (
            <li className={styles.item}>
                <div className={styles.content}>
                    <div className={`${styles.image} ${product.state ? '' : styles.image_disabled}`}
                         style={{backgroundImage: `url(${item.productImageUrl})`}}>

                    </div>
                    <div className={styles.info}>
                        <div className={`${styles.size} ${item.typeSize === 'weight' ? styles.size_padding : ''}`}
                             style={{backgroundImage: `url(${item.typeSize !== 'weight' ? bottleImage : boxImage})`}}>
                            {item.size}
                        </div>
                        <h2 className={styles.subtitle}>
                            <span>{item.brand}</span> {item.name}
                        </h2>
                        <p className={styles.description}>
                            {item.description}
                        </p>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Counter
                        disabled={product.state}
                        className={`${styles.counter} ${styles.action}`}
                        count={count}
                        onReplace={replaceCountHandler}
                        onRemove={removeCountHandler}
                        onAdd={addCountHandler}
                        onBlur={setValueHandler}
                    />
                    <div className={`${styles.price} ${styles.action}`}>
                        {product.state ? `${(product.count * item.price).toFixed(2)} ${CURRENCY}` : "Нет в наличии"}
                    </div>
                    <DeleteButton product={product} class={`${styles.action}`}/>
                </div>
            </li>
        );
    }
;