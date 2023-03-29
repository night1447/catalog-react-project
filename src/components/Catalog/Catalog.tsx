import React from "react";
import styles from './catalog.module.scss'
import {TypesProduct} from "../TypesProduct/TypesProduct";
import {LayoutChoices} from "../LayoutChoices/LayoutChoices";
import {Sort} from "../Sort/Sort";
import {CatalogContent} from "./CatalogContent/CatalogContent";
import Filter from "../Filter/Filter";


export const Catalog = () => {
        return (
            <>
                <div className={styles['title-wrapper']}>
                    <h2 className={styles.title}>Косметика и гигиена</h2>
                    <div className={styles.inner}>
                        <Sort class={styles.sort}/>
                        <LayoutChoices class={styles.layout}/>
                    </div>
                </div>
                <TypesProduct class={styles.types}/>
                <div className={styles.main}>
                    <Filter class={styles.filter}/>
                    <div className={styles.wrapper}>
                        <CatalogContent/>
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