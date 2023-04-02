import React from 'react';
import styles from './modal.module.scss'
import {Portal} from "../Portal/Portal";

type Props = {
    children: React.ReactNode,
    showModal: boolean,
    onClose: () => void,
};
export const Modal = (props: Props) => {

    return (
        props.showModal ?
            <Portal idDocument={'modal'}>
                <div className={styles.modal}>
                    {props.children}
                    <button className={styles.close} onClick={props.onClose}></button>
                </div>
                <div className={styles.backdrop} onClick={props.onClose}></div>
            </Portal> : <></>
    );
};