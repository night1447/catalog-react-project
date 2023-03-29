import React, {useState} from 'react';
import {TextSearch} from "../../TextSearch/TextSearch";
import styles from "./filter-block.module.scss";
import arrowImage from "../../../assets/select-icon.svg"
import {FilterCheckbox} from "../FilterCheckbox/FilterCheckbox";

type FilterBlockProps = {
    list: any[],
    class?: string,
    onSearch: (value: string) => void,
    countPerView: number,
    state: any[],
    onChangeState: (value: any) => void,

};
const checkboxesInitialState: string[] = [];
const getList = (list: any[], countPerView: number, getItem: (item: any) => any) => {
    const result = [];
    const length = countPerView > list.length ? list.length : countPerView;
    for (let i = 0; i < length; i++) {
        result.push(getItem(list.at(i)));
    }
    return result;
}
export const FilterBlock = ({
                                list,
                                class: className,
                                countPerView,
                                onSearch,
                                state,
                                onChangeState
                            }: FilterBlockProps) => {
    const [perView, setPerView] = useState(countPerView);
    const toggleCheckboxHandler = (value: string) => {
        onChangeState(value);
    };
    const getItem = (item: any) => <li className={styles.checkbox} key={item.title}>
        <FilterCheckbox htmlFor={item.title}
                        checked={state.includes(item.title)}
                        title={item.title}
                        onToggle={toggleCheckboxHandler}
                        count={item.count}/>
    </li>;
    const changePerViewHandler = () => {
        setPerView((prevState) => prevState === list.length ? countPerView : list.length)
    };
    return (
        <>
            <TextSearch htmlFor={'search-manufacturer'}
                        onChange={value => onSearch(value)}
                        onClick={value => onSearch(value)}
                        class={styles.search}/>
            <ul className={className}>
                {getList(list, perView, getItem)}
            </ul>
            {list.length >= perView ?
                <button className={`${styles.show}`}
                        onClick={changePerViewHandler}
                >{perView === list.length ? 'Скрыть' : 'Показать все'}
                    <span className={`${styles.arrow} ${perView === list.length ? styles['arrow-top'] : ''}`}
                          style={{backgroundImage: `url(${arrowImage})`}}
                    ></span>
                </button> : ''}
        </>
    );
};