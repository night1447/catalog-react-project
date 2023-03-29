import React from 'react';
import {Button} from "../Button/Button";
import downloadImage from "../../assets/download.svg";
import styles from "./price-button.module.scss"

type Props = {
    classes?: string[],
    class?: string,
    onClick?: () => void,

};
export const PriceListButton = (props: Props) => {
    return (
        <Button
            onClick={props.onClick}
            isRounded={false}
            title={'Прайс-лист'}
            imageClass={styles.image}
            urlImage={downloadImage}
            class={`${props.classes?.join(' ') || ''} ${props.class || ''}`}
        />
    );
};