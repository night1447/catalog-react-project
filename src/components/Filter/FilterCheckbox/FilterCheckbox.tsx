// @flow
import * as React from 'react';
import {ChangeEvent} from 'react';
import {Checkbox} from "../../UI/Checkbox/Checkbox";
import styles from './checkbox.module.scss'

type FilterCheckboxProps = {
    htmlFor: string,
    title: string,
    count: number,
    onAdd: (value: string) => void,
    onRemove: (value: string) => void,

};
export const FilterCheckbox = (props: FilterCheckboxProps) => {
    const checkboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            props.onAdd(props.title);
        } else{
            props.onRemove(props.title);
        }
    };

    return (
        <Checkbox htmlFor={props.htmlFor} onChange={checkboxHandler}>
            <span className={styles.title}>{props.title}</span>
            <span className={styles.count}>
                ({props.count})
            </span>
        </Checkbox>
    );
};