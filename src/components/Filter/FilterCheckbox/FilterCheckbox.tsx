import * as React from 'react';
import {Checkbox} from "../../../UI/Checkbox/Checkbox";
import styles from './checkbox.module.scss'

type FilterCheckboxProps = {
    htmlFor: string,
    title: string,
    count: number,
    checked: boolean,
    onToggle: (value: string) => void,

};
export const FilterCheckbox = (props: FilterCheckboxProps) => {
    const checkboxHandler = () => {
        props.onToggle(props.title);
    };

    return (
        <Checkbox htmlFor={props.htmlFor} checked={props.checked} onChange={checkboxHandler}>
            <span className={styles.title}>{props.title}</span>
            <span className={styles.count}>
                ({props.count})
            </span>
        </Checkbox>
    );
};