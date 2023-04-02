import * as React from 'react';
import styles from "./button.module.scss";
import {SrOnly} from "../SrOnly/SrOnly";

type ButtonProps = {
    type?: 'submit' | 'button' | 'reset',
    class?: string,
    imageClass?: string,
    title?: string,
    onClick?: () => void,
    urlImage?: string,
    isRounded: boolean,
    disabled?: boolean,
};
export const Button = (props: ButtonProps) => {
    return (
        <button type={props.type || 'button'}
                disabled={props.disabled}
                className={`${styles.btn} ${props.isRounded ? styles.rounded : ''} ${props.class || ''}`}
                onClick={props.onClick}>
            {props.title}
            {
                props.urlImage ?
                    <span className={`${styles.image} ${props.imageClass || ''}`}
                          style={{backgroundImage: `url(${props.urlImage})`}}>
                        <SrOnly>
                            Декоративная картинка
                        </SrOnly>
                    </span>
                    :
                    ''
            }
        </button>
    );
};