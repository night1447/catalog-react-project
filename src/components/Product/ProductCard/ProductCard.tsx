import React, {useState} from 'react';
import {ICatalogProduct} from "../../../models/ICatalogProduct";
import styles from './product.module.scss'
import bottleImage from "../../../assets/decor/types/bottle.svg";
import boxImage from "../../../assets/decor/types/box.svg";
import shareImage from "../../../assets/decor/helpers/share.svg"
import {SrOnly} from "../../../UI/SrOnly/SrOnly";
import {PriceListButton} from "../../../UI/PriceListButton/PriceListButton";
import {DropDownElement} from "../../DropDownELement/DropDownElement";
import {TrashButton} from "../../TrashButton/TrashButton";
import {Counter} from "../../Counter/Counter";
import {CURRENCY} from "../../../constants/info";

type Props = {
    product: ICatalogProduct,
    state: boolean
};
const checkValue = (value: string | number) => value ? value : 'Информация не указана'
export const ProductCard = ({product, state}: Props) => {
    const [count, setCount] = useState(1);
    const addCountHandler = () => {
        setCount(prevState => prevState + 1);

    };
    const removeCountHandler = () => {
        if (count > 1) {
            setCount(prevState => prevState - 1);
        } else {
            setCount(1);
        }

    };
    const replaceCountHandler = (value: number) => {
        setCount(value);
    }
    return (
        <div className={styles.product}>
            <div className={styles.image}
                 style={{backgroundImage: `url(${product.productImageUrl})`}}>
            </div>
            <div className={styles.info}>
                <div className={styles.shell}>
                    <div
                        className={`${styles.state} ${state ? styles.state_has : styles.state_empty}`}>{state ? 'В наличии' : 'Нет в  наличии'}</div>
                    <h1 className={styles.title}>
                        <span className={styles.title_bold}>{product.brand}</span> {product.name}
                    </h1>
                    <div className={`${styles.size} ${product.typeSize === 'weight' ? styles.size_padding : ''}`}
                         style={{backgroundImage: `url(${product.typeSize !== 'weight' ? bottleImage : boxImage})`}}>
                        {checkValue(product.size)}
                    </div>
                    <div className={`${styles.flex} ${styles.actions}`}>
                        <div className={styles.price}>{(product.price * count).toFixed(2).replace('.', ',')} {CURRENCY}</div>
                        <Counter
                            className={styles.counter}
                            count={count}
                            onReplace={replaceCountHandler}
                            onRemove={removeCountHandler}
                            onAdd={addCountHandler}
                            onBlur={() => {
                            }}/>
                        <TrashButton
                            count={count}
                            product={product}
                            class={`${styles.buy}
                                 ${styles.mobile_hidden}`}/>

                    </div>

                    <div className={`${styles.actions} ${styles.actions_mb}`}>
                        <TrashButton
                            count={count}
                            product={product}
                            class={`${styles.buy} 
                                ${styles.mobile_show}`}/>
                        <button type={'button'} className={`${styles.block} ${styles.share}`}
                                style={{backgroundImage: `url(${shareImage})`}}>
                            <SrOnly>
                                Поделится
                            </SrOnly>
                        </button>
                        <p className={`${styles.block} ${styles.attention}`}>
                            При покупке от <span className={styles.attention_bold}>10 000 {CURRENCY}</span> бесплатная
                            доставка
                            по
                            Кокчетаву и области
                        </p>
                        <PriceListButton class={`${styles.block} ${styles['price-button']}`} isBlack={true}/>
                    </div>
                </div>

                <ul className={styles['short-info']}>
                    <li className={styles.item}>
                        Производитель: <span className={styles.item_value}>{checkValue(product.manufacturer)}</span>
                    </li>
                    <li className={styles.item}>
                        Бренд: <span className={styles.item_value}>{checkValue(product.brand)}</span>
                    </li>
                    <li className={styles.item}>
                        Артикул: <span className={styles.item_value}>{checkValue(product.barCode)}</span>
                    </li>
                    <li className={styles.item}>
                        Штрихкод: <span className={styles.item_value}>{checkValue(product.barCode)}</span>
                    </li>
                </ul>
                <ul className={styles['drop-list']}>
                    <li className={styles['drop-item']}>
                        <DropDownElement title={'Описание'} activeTitleClass={styles.subtitle}
                                         dropBlockClass={styles.description}>
                            {checkValue(product.description)}
                        </DropDownElement>
                    </li>
                    <li className={styles['drop-item']}>
                        <DropDownElement title={'Характеристики'} activeTitleClass={styles.subtitle}>
                            <ul className={styles.list}>
                                <li className={styles.item}>
                                    Назначение: <span className={styles.item_value}>{product.brand || ''}</span>
                                </li>
                                <li className={styles.item}>
                                    Тип:: <span className={styles.item_value}>{checkValue(product.typeSize)}</span>
                                </li>
                                <li className={styles.item}>
                                    Производитель: <span
                                    className={styles.item_value}>{checkValue(product.manufacturer)}</span>
                                </li>
                                <li className={styles.item}>
                                    Бренд: <span className={styles.item_value}>{checkValue(product.brand)}</span>
                                </li>
                                <li className={styles.item}>
                                    Артикул: <span
                                    className={styles.item_value}>{checkValue(product.barCode)}</span>
                                </li>
                                <li className={styles.item}>
                                    Штрихкод: <span
                                    className={styles.item_value}>{checkValue(product.barCode)}</span>
                                </li>
                                <li className={styles.item}>
                                    Вес: <span className={styles.item_value}>{checkValue(product.size)}</span>
                                </li>
                                <li className={styles.item}>
                                    Объем: <span className={styles.item_value}>{checkValue(product.size)}</span>
                                </li>
                                <li className={styles.item}>
                                    Кол-во в коробке: <span
                                    className={styles.item_value}>{checkValue(product.size)}</span>
                                </li>
                            </ul>
                        </DropDownElement>
                    </li>
                </ul>
            </div>
        </div>
    );
};