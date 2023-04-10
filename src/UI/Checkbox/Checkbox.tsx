import React, {ChangeEvent, FC, PropsWithChildren} from 'react';
import {Label} from "../Label/Label";
import {Input} from "../Input/Input";
import styles from './checkbox.module.scss'

type CheckboxProps = {
    htmlFor: string,
    checked: boolean,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
};
export const Checkbox: FC<PropsWithChildren<CheckboxProps>> = (props) => {
    return (
        <Label htmlFor={props.htmlFor} class={styles.label}>
            <Input type={'checkbox'} id={props.htmlFor} checked={props.checked} class={styles.input}
                   onChange={props.onChange}/>
            <span className={styles.checked}></span>
            {props.children}
        </Label>
    );
};