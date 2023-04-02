import React, {useEffect, useState} from "react";
import styles from './catalog.module.scss'
import {TypesProduct} from "../TypesProduct/TypesProduct";
import {LayoutChoices} from "../LayoutChoices/LayoutChoices";
import {Sort} from "../Sort/Sort";
import {CatalogContent} from "./CatalogContent/CatalogContent";
import Filter from "../Filter/Filter";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useProductService} from "../../services/ProductService";


export const Catalog = () => {
        const state = useTypedSelector(state => state);
        const [products, setProducts] = useState(state.productReducer.products);
        const {getAllProducts, hasError, hasLoading} = useProductService();

        //LOADING
        useEffect(() => {
            if (products.length === 0) {
                getAllProducts().then((data) => setProducts(data));
            }
        }, []);
        return (
            <>
                <div className={styles['title-wrapper']}>
                    <h1 className={styles.title}>Косметика и гигиена</h1>
                    <div className={styles.inner}>
                        <Sort class={styles.sort}/>
                        <LayoutChoices class={styles.layout}/>
                    </div>
                </div>
                <TypesProduct class={styles.types}/>
                <div className={styles.main}>
                    <Filter class={styles.filter} products={products}/>
                    <div className={styles.wrapper}>
                        <CatalogContent hasLoading={hasLoading} hasError={hasError} products={products}/>
                        <p className={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo,
                            vestibulum
                            sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis.
                            Faucibus
                            consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis.
                            Nunc
                            elit,
                            dignissim sed nulla ullamcorper enim, malesuada.
                        </p>
                    </div>
                </div>

            </>
        );
    }
;