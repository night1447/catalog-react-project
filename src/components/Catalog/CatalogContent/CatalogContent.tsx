import React, {useEffect, useState} from 'react';
import styles from "../catalog.module.scss";
import {CatalogList} from "../CatalogList/CatalogList";
import {Pagination} from "../../Pagination/Pagination";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {ICatalogProduct} from "../../../models/ICatalogProduct";
import {Error} from "../../../UI/Error/Error";
import {Loading} from "../../../UI/Loading/Loading";
import {DECREASE_OPTION, INCREASE_OPTION, NAME_OPTION, PRICE_OPTION} from "../../Sort/constants";
import {COUNT_VIEW_PRODUCT} from "../../../constants/filter";


const initialState: ICatalogProduct[] = [];


const findOccurrencesArrays = (firstArray: string[], secondArray: string[]): boolean => {
   secondArray = secondArray.map(item => item.trim().toLowerCase());
    for (let i = 0; i < firstArray.length; i++) {
        if (secondArray.includes(firstArray[i].trim().toLowerCase())) {
            return true;
        }
    }
    return false;
};
const sortingMassiveByField = (array: any[], field: string, decrease?: boolean) => {
    if (decrease) {
        return new Array(...array).sort((a, b) => {
            if (a[field] < b[field]) {
                return 1;
            }
            if (a[field] > b[field]) {
                return -1;
            }
            return 0;
        })
    }
    return new Array(...array).sort((a, b) => {
        if (a[field] > b[field]) {
            return 1;
        }
        if (a[field] < b[field]) {
            return -1;
        }
        return 0;
    })
};

const settingPaginationState: { start: number; end: number } = {start: 0, end: COUNT_VIEW_PRODUCT};


interface CatalogProps {
    products: ICatalogProduct[],
    hasError: boolean,
    hasLoading: boolean,
}

export const CatalogContent = ({products, hasLoading, hasError}: CatalogProps) => {
    const [filteredProducts, setFilteredProducts] = useState(initialState);
    const [settingsPagination, setSettingsPagination] = useState(settingPaginationState);
    const dispatch = useDispatch();
    const state = useTypedSelector(state => state);

    const typesProduct = state.typesProductReducer.selectedTypesProduct;
    const prices = state.filterReducer.counter;
    const manufacturers = state.filterReducer.manufacturers;
    const sort = state.sortReducer.sort;

    useEffect(() => {
        let filteredMassive = products.filter(item => (manufacturers.length === 0 || manufacturers.includes(item.manufacturer)) &&
            ((prices.min === 0 && prices.max === 0) || (item.price >= prices.min && item.price <= prices.max))
            && (typesProduct.length === 0 || findOccurrencesArrays(typesProduct, item.types)));
        switch (sort) {
            case PRICE_OPTION:
                filteredMassive = sortingMassiveByField(filteredMassive, PRICE_OPTION);
                break;
            case NAME_OPTION:
                filteredMassive = sortingMassiveByField(filteredMassive, NAME_OPTION);
                break;
            case DECREASE_OPTION:
                filteredMassive = sortingMassiveByField(filteredMassive, PRICE_OPTION, true);
                break;
            case INCREASE_OPTION:
                filteredMassive = sortingMassiveByField(filteredMassive, PRICE_OPTION);
                break;
        }

        setFilteredProducts(filteredMassive);

    }, [typesProduct, prices, manufacturers, sort, products]);

    return (
        hasError ? <Error/> :
            hasLoading ? <Loading/> :
                filteredProducts.length !== 0 ?
                    <>
                        <CatalogList class={styles.catalog}
                                     start={settingsPagination.start}
                                     end={settingsPagination.end > filteredProducts.length ? filteredProducts.length : settingsPagination.end}
                                     products={filteredProducts}/>

                        <Pagination
                            onPageChange={(page: number) => {
                                setSettingsPagination((prevState) => {
                                        return {
                                            start: page * COUNT_VIEW_PRODUCT,
                                            end: page * COUNT_VIEW_PRODUCT + COUNT_VIEW_PRODUCT,
                                        }
                                    }
                                )

                            }
                            }
                            class={styles.pages}
                            count={filteredProducts?.length}/>
                    </> : <h3 className={styles.subtitle}>Ничего не найдено;( <br/> Попробуйте другую конфигурацию</h3>
    )
};
