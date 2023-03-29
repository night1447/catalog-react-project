import React from 'react';
import styles from '../types-product.module.scss'

type typeProductProps = {
    value: string,
    isActive: boolean,
    onClick: (value: string) => void,
};
export const TypeProduct = (props: typeProductProps) => {
        return (
            <li className={styles.item}>
                <button type={"button"}
                        className={`${styles.button} ${props.isActive ? styles.active : ''}`}
                        onClick={() => props.onClick(props.value)}>
                    {props.value}
                </button>
            </li>
        );
    }
;