import * as React from 'react';
import styles from './header.module.scss'
import {HeaderBottom} from "./Bottom/HeaderBottom";
import {HeaderTop} from "./Top/HeaderTop";

export const Header = () => {
    return (
        <header className={styles.header}>
            <HeaderTop/>
            <HeaderBottom/>
        </header>
    );
};