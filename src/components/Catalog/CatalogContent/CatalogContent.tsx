import React, {useEffect, useState} from 'react';
import styles from "../catalog.module.scss";
import {CatalogList} from "../CatalogList/CatalogList";
import {Pagination} from "../../Pagination/Pagination";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {setProductsAction} from "../../../store/reducers/Products/ProductAction";
import {setTypesProductAction} from "../../../store/reducers/Filters/TypesProduct/typesProductAction";
import {ICatalogProduct} from "../../../models/ICatalogProduct";
import {Error} from "../../../UI/Error/Error";
import {Loading} from "../../../UI/Loading/Loading";
import {DECREASE_OPTION, INCREASE_OPTION, NAME_OPTION, PRICE_OPTION} from "../../Sort/constants";
import {useProductService} from "../../../services/ProductService";

const COUNT_VIEW_PRODUCT: number = 3;
const initialState: ICatalogProduct[] = [];

const getAllTypesProduct = (products: ICatalogProduct[]): string[] => {
    let massiveTypes: string[] = [];
    products.map(product => {
        const types = product.types;
        massiveTypes = [...types, ...massiveTypes];
    })
    return Array.from(new Set(massiveTypes));
};

const findOccurrencesArrays = (firstArray: string[], secondArray: string[]): boolean => {
    for (let i = 0; i < firstArray.length; i++) {
        if (secondArray.includes(firstArray[i])) {
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


export const CatalogContent = () => {
    const [filteredProducts, setFilteredProducts] = useState(initialState);
    const [settingsPagination, setSettingsPagination] = useState(settingPaginationState);
    const dispatch = useDispatch();
    const state = useTypedSelector(state => state);
    const products = state.productReducer.products;

    const typesProduct = state.typesProductReducer.selectedTypesProduct;
    const prices = state.filterReducer.counter;
    const manufacturers = state.filterReducer.manufacturers;
    const sort = state.sortReducer.sort;

    const {getAllProducts, hasError, hasLoading} = useProductService();
    //LOADING
    useEffect(() => {
        if (products.length === 0) getAllProducts().then(data => dispatch(setProductsAction(data)));
    }, []);
    //INIT
    useEffect(() => {
        const types = getAllTypesProduct(products);
        dispatch(setTypesProductAction(types));
        setFilteredProducts(products);
    }, [products]);

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

    }, [typesProduct, prices, manufacturers, sort])

    return (
        hasError ? <Error/> :
            hasLoading ? <Loading/> :
                <>
                    <CatalogList class={styles.catalog}
                                 start={settingsPagination.start}
                                 end={settingsPagination.end > filteredProducts.length ? filteredProducts.length : settingsPagination.end}
                                 products={filteredProducts}/>
                    {<Pagination
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
                        count={filteredProducts?.length}
                        countViewProduct={COUNT_VIEW_PRODUCT}/>}
                </>
    );
};