import React from 'react';
import {Modal} from "../../UI/Modal/Modal";
import {Button} from "../../UI/Button/Button";
import styles from './confirm.module.scss'

type Props = {
    title: string,
    onConfirm: () => void,
    showModal: boolean,
    onClose: () => void,
};
export const ConfirmModal = (props: Props) => {
    return (
        <Modal onClose={props.onClose} showModal={props.showModal}>
            <div className={styles.block}>
                <h2 className={styles.title}>{props.title}</h2>
                <div className={styles.buttons}>
                    <Button title={'Подтвердить'} class={styles.success}
                            onClick={props.onConfirm} isRounded={false}
                            type={'button'}/>
                    <Button title={'Отменить'} class={styles.decline} onClick={props.onClose} isRounded={false}
                            type={'button'}/></div>
            </div>
        </Modal>
    );
};