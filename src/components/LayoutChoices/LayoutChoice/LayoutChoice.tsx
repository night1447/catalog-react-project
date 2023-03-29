import React from 'react';
import styles from '../layout.module.scss'
import {SrOnly} from "../../../UI/SrOnly/SrOnly";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {setLayoutAction} from "../../../store/reducers/Filters/Layout/LayoutAction";
import {LayoutPayload} from "../../../store/reducers/Filters/Layout/LayoutTypes";

interface layoutChoiceProps extends LayoutPayload {
    class?: string,
    urlImage: string,
}

export const LayoutChoice = (props: layoutChoiceProps) => {
    const layout = useTypedSelector(state => state.layoutReducer);
    const dispatch = useDispatch();

    const changeLayoutHandler = () => {
        dispatch(setLayoutAction({layout: props.layout}))
    };

    return (
        <li className={`${styles.item} ${props.class || ''}`}>
            <button
                onClick={changeLayoutHandler}
                className={`${styles.button} ${layout.layout === props.layout ? styles.active : ''}`}
                type={"button"}
                style={{backgroundImage: `url(${props.urlImage})`}}>
                <SrOnly>
                    Переключить режим отображения
                </SrOnly>
            </button>
            {layout.layout === props.layout ? <span className={styles.element}></span> : ''}
        </li>
    );
};