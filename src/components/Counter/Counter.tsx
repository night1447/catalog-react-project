import React, {ChangeEvent} from 'react';
import {Label} from "../../UI/Label/Label";
import styles from './counter.module.scss'

type CounterProps = {
    count: number,
    disabled?: boolean,
    onAdd: () => void,
    onRemove: () => void,
    className?: string,
    onBlur: (value: number) => void,
    onReplace: (value: number) => void,
};
export const Counter = (props: CounterProps) => {
    const AddValueHandler = () => {
        props.onAdd();
    };

    const removeValueHandler = () => {
        props.onRemove();
    };

    const replaceValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (!Number.isNaN(+e.target.value)) {
            props.onReplace(+e.target.value);
        } else {
            props.onReplace(1);
        }
    };

    const blurHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (!Number.isNaN(+e.target.value)) {
            props.onBlur(+e.target.value);
        } else {
            props.onBlur(1);
        }
    };

    return (
        <Label htmlFor={'counter-value'} class={`${props.className || ''} ${styles.label}`}>
            <button type={"button"} onClick={removeValueHandler} disabled={!props.disabled}
                    className={styles.button}>-
            </button>
            <input type={'text'}
                   disabled={!props.disabled}
                   onBlur={blurHandler}
                   onInput={replaceValueHandler}
                   className={styles.input}
                   value={props.count} min={1}
                   id={'counter-value'}/>
            <button type={"button"} onClick={AddValueHandler} disabled={!props.disabled}
                    className={styles.button}>+
            </button>
        </Label>
    );
};