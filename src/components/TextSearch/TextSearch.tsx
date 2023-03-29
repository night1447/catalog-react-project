import React, {useState} from 'react';
import {Search} from "../../UI/Search/Search";

type Props = {
    onClick: (value: string) => void,
    htmlFor: string,
    onChange: (value: string) => void,
    class?: string,
};
export const TextSearch = (props: Props) => {
    const [value, setValue] = useState('');
    return (
        <Search
            onChange={(e) => {
                setValue(prevState => e.target.value);
                props.onChange(e.target.value);
            }}
            class={props.class}
            onClick={() => props.onClick(value)}
            value={value}
            htmlFor={props.htmlFor}
        />
    );
};