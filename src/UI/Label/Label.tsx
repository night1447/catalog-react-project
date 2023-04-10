import React, {FC, PropsWithChildren} from 'react';

type LabelProps = {
    class?: string,
    htmlFor: string,
};
export const Label: FC<PropsWithChildren<LabelProps>> = (props) => {
    return (
        <label className={props.class} htmlFor={props.htmlFor}>
            {props.children}
        </label>
    );
};