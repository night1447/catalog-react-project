import React, {ChangeEvent, useState} from 'react';
import styles from './field.module.scss'
import {Label} from "../../../UI/Label/Label";
import {Button} from "../../../UI/Button/Button";

interface Props {
    title: string,
    isNumber: boolean,
    id?: string,
    value: string | number | string[]
}

export const AdminField = ({title, isNumber, value: initialValue, id}: Props) => {
    const [value, setValue] = useState(initialValue);
    return (
        <Label htmlFor={id ? id : title} class={styles.label}>{title}: <input type={isNumber ? 'number' : 'text'}
                                                                              id={id ? id : title}
                                                                              className={styles.input}
                                                                              value={value}
                                                                              name={title}
                                                                              onInput={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}/>
        </Label>
    );
};

interface CustomProps {
    title: string,
    isNumber: boolean,
    value: string[]
}

export const CustomAdminField = ({title, isNumber, value: initialState}: CustomProps) => {
    const [labels, setLabels] = useState(initialState.length === 0 ? [''] : initialState);
    const addCountLabelHandler = () => {
        setLabels((prevState) => [...prevState, ''])
    };
    const removeCountLabelHandler = () => {
        setLabels((prevState) => {
            const massive = [...prevState];
            massive.pop();
            return massive;
        })
    };

    return (
        <div className={styles.block}>
            <div className={styles.btns}>
                <Button isRounded={true} class={styles.btn} title={'-'}
                        onClick={removeCountLabelHandler}/>
                <Button isRounded={true} title={'+'} class={styles.btn} onClick={addCountLabelHandler}/>
            </div>
            <div className={styles.labels}>{labels.map((label, index) => <AdminField title={`type`}
                                                                                     id={`type-${index}`}
                                                                                     value={label}
                                                                                     key={`type-${index}`}
                                                                                     isNumber={isNumber}/>)
            }</div>
        </div>)
}