import React, {useEffect, useState} from 'react';
import styles from "./trash.module.scss"
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {TrashItem} from "./TrashItem/TrashItem";
import {Button} from "../../UI/Button/Button";
import {Link} from "react-router-dom";
import {Message} from "../Message/Message";
import {useDispatch} from "react-redux";
import {resetProductsAction} from "../../store/reducers/Trash/TrashActions";
import {useProductService} from "../../services/ProductService";
import {AddedTrashProduct} from "../../store/reducers/Trash/TrashTypes";
import {CURRENCY} from "../../constants/info";

export interface TrashItemType extends AddedTrashProduct {
    state: boolean,
}

const initialState: TrashItemType[] = [];
export const TrashSection = () => {
    const trash = useTypedSelector(state => state.trashReducer);
    const productsState = useTypedSelector(state => state.productReducer.products);
    const {getProductsByIds, getProductById} = useProductService();
    const [trashProducts, setTrashProducts] = useState(initialState);
    useEffect(() => {
            if (trash.products.length !== 0) {
                if (productsState.length === 0) {
                    getProductsByIds(trash.products.map(item => item.product)).then((data) => {
                        setTrashProducts(data.map((product, index) => ({
                            state: true,
                            count: trash.products[index].count,
                            product
                        })));
                    })
                } else {
                    for (let i = 0; i < productsState.length; i++) {
                        let item = productsState[i];
                        for (let j = 0; j < trash.products.length; j++) {
                            let trashItem = trash.products[j];
                            if (trashItem.product === item.id) {
                                setTrashProducts(prevState => [...prevState, {
                                    state: true,
                                    count: trashItem.count,
                                    product: item
                                }])
                            } else {
                                getProductById(trashItem.product).then((item) =>
                                    setTrashProducts(prevState => [...prevState, {
                                        state: true,
                                        count: trashItem.count,
                                        product: item
                                    }]))
                            }
                        }
                    }
                    }
                }
            }
            , []);
        useEffect(() => {
                if (trash.products.length === trashProducts.length) {
                    trash.products.map(itemInStorage =>
                        setTrashProducts((prevState) => prevState.map(item => {
                            if (item.product.id === itemInStorage.product) {
                                return {...item, count: itemInStorage.count, product: item.product}
                            }
                            return item;
                        })))
                } else if (trash.products.length < trashProducts.length) {
                    const ids = trash.products.map(item => item.product);
                    setTrashProducts(prevState => prevState.filter(item => ids.includes(item.product.id)))
                }
            },
            [trash.products, trashProducts.length])
        const [showMessage, setShowMessage] = useState(false);
        const dispatch = useDispatch();
        const submitHandler = () => {
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 3000);
            dispatch(resetProductsAction());
        };

        return (
            <>
                {trash.products.length !== 0 ?
                    <div className={styles.trash}>
                        <h1 className={styles.title}>Корзина</h1>
                        <ul className={styles.list}>
                            {trashProducts.map(product => <TrashItem product={product} data-testid={'trash-item'}
                                                                     key={product.product.id}/>)}
                        </ul>
                        <div className={styles.results}>
                            <Button
                                onClick={submitHandler}
                                isRounded={false}
                                class={styles.submit}
                                title={'Оформить заказ'}
                            />
                            <div className={styles.total}
                                 data-testid={'total-trash'}>{trash.totalPrice} {CURRENCY}</div>
                        </div>
                    </div>
                    :
                    <div className={`${styles.empty} ${styles.trash}`}>
                        <h1 className={`${styles.title} ${styles.title_empty}`}>
                            Корзина пуста перейдите в каталог, чтоб добавить товар в корзину
                        </h1>
                        <Link to={'/catalog'} className={styles.href_catalog}>Перейти в каталог</Link>
                        <Message
                            isShow={showMessage}
                            message={'Заказ оформлен, спасибо!'}
                            type={'success'}/>
                    </div>
                }
            </>
        );
    }
;