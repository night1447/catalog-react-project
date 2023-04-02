import React, {ChangeEvent} from 'react';
import styles from "./input.module.scss"

type InputProps = {
    placeholder?: string,
    class?: string,
    type: string,
    value?: string | number,
    id: string,
    min?: number,
    max?: number,
    checked?: boolean,
    autocomplete?: string,
    onInput?: (e: ChangeEvent<HTMLInputElement>) => void,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
    onBlur?: (e: ChangeEvent<HTMLInputElement>) => void,
};
export const Input = (props: InputProps) => {
    return (
        <input type={props.type}
               className={`${styles.input} ${props.class}`}
               id={props.id}
               min={props.min || ''}
               max={props.max || ''}
               onBlur={props.onBlur}
               checked={props.checked}
               onInput={props.onInput}
               onChange={props.onChange}
               placeholder={props.placeholder}
               value={props.value || ''}
               autoComplete={props.autocomplete || ''}
        />
    );
};