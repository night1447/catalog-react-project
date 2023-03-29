import React from 'react';

type LabelProps = {
    children: React.ReactNode,
    class?: string,
    htmlFor: string,
};
export const Label = (props: LabelProps) => {
    return (
        <label className={props.class} htmlFor={props.htmlFor}>
            {props.children}
        </label>
    );
};