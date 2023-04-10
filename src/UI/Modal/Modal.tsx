import React, {FC, PropsWithChildren} from 'react';
import styles from './modal.module.scss'
import {Portal} from "../Portal/Portal";

type ModalProps = {
    showModal: boolean,
    onClose: () => void,
};
export const Modal: FC<PropsWithChildren<ModalProps>> = (props) => {

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