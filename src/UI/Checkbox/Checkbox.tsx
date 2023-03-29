import React, {ChangeEvent} from 'react';
import {Label} from "../Label/Label";
import {Input} from "../Input/Input";
import styles from './checkbox.module.scss'

type CheckboxProps = {
    htmlFor: string,
    checked: boolean,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
    children: React.ReactNode,
};
export const Checkbox = (props: CheckboxProps) => {
    return (
        <Label htmlFor={props.htmlFor} class={styles.label}>
            <Input type={'checkbox'} id={props.htmlFor} checked={props.checked} class={styles.input}
                   onChange={props.onChange}/>
            <span className={styles.checked}></span>
            {props.children}
        </Label>
    );
};