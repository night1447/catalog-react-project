import React from 'react';
import {Button} from "../Button/Button";
import downloadImage from "../../assets/decor/helpers/download.svg";
import downloadBlackImage from "../../assets/decor/helpers/download-black.svg";
import styles from "./price-button.module.scss"

type Props = {
    classes?: string[],
    class?: string,
    onClick?: () => void,
    isBlack?: boolean,

};
export const PriceListButton = (props: Props) => {
    return (
        <Button
            onClick={props.onClick}
            isRounded={false}
            title={'Прайс-лист'}
            imageClass={styles.image}
            urlImage={`${props.isBlack ? downloadBlackImage : downloadImage}`}
            class={`${props.classes?.join(' ') || ''} ${props.class || ''}`}
        />
    );
};