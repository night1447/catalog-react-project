import React, {useState} from 'react';
import styles from './dropdown.module.scss'
import arrowImage from '../../assets/decor/helpers/select-icon.svg'

type DropDownProps = {
    title: string,
    titleClassName?: string,
    dropBlockClass?: string,
    activeTitleClass?: string,
    children: React.ReactNode,
    initialState?: boolean,
};
export const DropDownElement = ({
                                    initialState,
                                    title,
                                    children,
                                    titleClassName,
                                    dropBlockClass,
                                    activeTitleClass
                                }: DropDownProps) => {
    const [isShow, setIsShow] = useState(initialState === true || initialState === false ? initialState : false);

    const changeStateHandler = () => {
        setIsShow((prevState) => !prevState);
    };

    return (
        <div className={styles.dropdown}>
            <button type={"button"}
                    className={`${styles.button} ${titleClassName || ''} ${isShow ? activeTitleClass : ''}`}
                    onClick={changeStateHandler}>
                {title}
                <span className={`${styles.arrow} ${isShow ? styles.rotate : ''}`}
                      style={{backgroundImage: `url(${arrowImage})`}}></span>
            </button>
            <div className={`${styles.block} ${isShow ? styles.show : styles.hidden} ${dropBlockClass || ''}`}>
                {children}
            </div>
        </div>
    );
};