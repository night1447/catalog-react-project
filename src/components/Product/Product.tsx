import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {ICatalogProduct} from "../../models/ICatalogProduct";
import {useProductService} from "../../services/ProductService";
import {Loading} from "../../UI/Loading/Loading";
import {Error} from "../../UI/Error/Error";
import {ProductCard} from "./ProductCard/ProductCard";
import Container from "../../UI/Container/Container";
import styles from "./ProductCard/product.module.scss"
import {Link} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";

type ProductProps = {};
const initialState: ICatalogProduct = {
    barCode: 0,
    brand: "",
    manufacturer: "",
    name: "",
    productImageUrl: "",
    size: "",
    typeSize: 'volume',
    types: [],
    id: 0,
    price: 0,
    description: ''

};
export const Product = (props: ProductProps) => {
    const {id} = useParams();
    const [product, setProduct] = useState(initialState);
    const [state, setState] = useState(true);
    const stateProducts = useTypedSelector(state => state.productReducer.products);
    const {hasError, hasLoading, getProductById} = useProductService();
    useEffect(() => {
        if (stateProducts.length === 0) {
            getProductById(id ? +id : 0).then(data => {
                setProduct(data);
            })
        } else {
            const findIndex = stateProducts.findIndex(item => item.id === +(id || 1));
            if (findIndex === -1) {
                getProductById(id ? +id : 0).then(data => {
                    setProduct(data);
                    setState(false);
                })
            } else {
                setProduct(stateProducts[findIndex]);
            }
        }
    }, [id]);

    const displayProduct = () => {
        if (Object.entries(product).length === 0) {
            return (<div className={styles['not-found']}>
                    <h1 className={styles['not-found-title']}>Данный товар не найден</h1>
                    <Link to={'/catalog'}>
                        Перейти в каталог
                    </Link>
                </div>
            )
        } else {
            return <ProductCard product={product} state={state}/>
        }
    };

    return (
        <Container>
            <div className={styles.wrapper}>
                {hasLoading ?
                    <Loading/> :
                    hasError ? <Error/> :
                        displayProduct()}
            </div>
        </Container>
    );
};