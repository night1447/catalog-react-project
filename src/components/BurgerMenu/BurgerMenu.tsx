import React, {useState} from 'react';
import styles from "./burger-menu.module.scss"
import {SrOnly} from "../../UI/SrOnly/SrOnly";
import {Contacts} from "../Header/Contacts/Contacts";
import {Navigation} from "../Navigation/Navigation";
import {PriceListButton} from "../../UI/PriceListButton/PriceListButton";

type Props = {};
export const BurgerMenu = (props: Props) => {
    const [showMenu, setShowMenu] = useState(false);
    if (showMenu) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }

    const changeStateMenuHandler = (e: any) => {
        if (e.target.classList.contains(styles['mobile-menu'])) setShowMenu(false);
    };

    return (
        <div className={styles['header-mobile']}>
            <button className={`${styles.button} ${showMenu ? styles.active : ''}`}
                    onClick={() => setShowMenu(prevState => !prevState)}>
                <SrOnly>Открыть мобильное меню</SrOnly>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`${styles['mobile-menu']} ${showMenu && styles.active}`} onClick={changeStateMenuHandler}>
                <div className={styles.wrapper}>
                    <Contacts/>
                    <h2 className={styles['mobile-title']}>
                        Меню сайта:
                    </h2>
                    <Navigation classes={[styles.mb, styles.nav]}/>
                    <PriceListButton class={styles.prices}/>
                </div>
            </div>
        </div>
    );
};