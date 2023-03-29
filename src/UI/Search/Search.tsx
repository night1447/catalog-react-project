import React, {ChangeEvent} from 'react';
import styles from "./search.module.scss";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import searchImage from "../../assets/search.svg";
import {Label} from "../Label/Label";

type Props = {
    htmlFor: string,
    onClick?: () => void,
    value?: string,
    class?: string,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
};
export const Search = ({htmlFor, onClick, onChange, value, class: className}: Props) => {
    return (
        <Label htmlFor={htmlFor} class={`${styles.search} ${className || ''}`}>
            <Input type={'text'} placeholder={'Поиск...'}
                   onChange={onChange}
                   value={value}
                   id={htmlFor}/>
            <Button isRounded={true}
                    class={styles['search-button']}
                    urlImage={searchImage}
                    onClick={onClick}
            />
        </Label>
    );
};