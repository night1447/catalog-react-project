import React from 'react';
import styles from './message.module.scss'
import {Portal} from "../../UI/Portal/Portal";

type MessageProps = {
    message: string,
    type: 'error' | 'inform' | 'success',
    class?: string,
    isShow: boolean,
};
export const Message = (props: MessageProps) => {
    return (
        props.isShow ? <Portal idDocument={'message'} data-testid={'message'}>
            <div
                className={`${styles.message} ${props.type === 'error' ? styles.error : props.type === 'inform' ? styles.info : styles.success}`}>
                <p className={styles.text}>
                    {props.message}
                </p>
            </div>
        </Portal> : <></>
    );
};

