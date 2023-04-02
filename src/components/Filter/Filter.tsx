import styles from "./filter.module.scss";
import {RangeValueCounter} from "../RangeValueCounter/RangeValueCounter";
import React, {useEffect, useReducer, useState} from "react";
import {Button} from "../../UI/Button/Button";
import trashImage from '../../assets/decor/helpers/trashcan.svg';
import arrowUpImage from '../../assets/decor/arrows/arrow-up-black.svg';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {FilterBlock} from "./FilterBlock/FilterBlock";
import {useDispatch} from "react-redux";
import {
    resetFilters,
    setManufacturerAction,
    setMaxValueCounterAction,
    setMinValueCounterAction
} from "../../store/reducers/Filters/Filter/FilterAction";
import {
    addProductAction,
    removeProductAction,
    resetTypesProducts
} from "../../store/reducers/Filters/TypesProduct/typesProductAction";
import {FilterProps} from "./FilterTypes";
import {initialState} from "./FilterVariables";
import {settingFiltersReducer} from "./FilterReducer";
import {COUNT_PER_VIEW_MANUFACTURERS} from "../../constants/filter";
import {getAllManufacturers, getFilteredManufactures, getMaxValue, getMinValue} from "./FIlterFunctions";
import {CURRENCY} from "../../constants/info";

const Filter = ({products, class: className}: FilterProps) => {
    const [manufacturers, setManufacturers] = useState(initialState);
    const [isShow, setIsShow] = useState(true);
    const manufacture = useTypedSelector(state => state.filterReducer.manufacturers);
    const price = useTypedSelector(state => state.filterReducer.counter);
    const [settingFilters, settingFiltersDispatch] = useReducer(settingFiltersReducer, {
        manufacturers: manufacture,
        price
    });
    const types = useTypedSelector(state => state.typesProductReducer.typesProduct);
    const selectTypes = useTypedSelector(state => state.typesProductReducer.selectedTypesProduct);

    const dispatch = useDispatch();

    useEffect(() => {
        const massive = getAllManufacturers(products);
        setManufacturers(() => ({
            manufacturers: massive,
            filteredManufacturers: massive
        }))
    }, [products]);

    const searchHandler = (value: string) => {
        setManufacturers((prevState) => ({
            ...prevState,
            filteredManufacturers: getFilteredManufactures(prevState.manufacturers, value)
        }))
    };
    const useFilterHandler = () => {
        dispatch(setManufacturerAction(settingFilters.manufacturers));
        dispatch(setMinValueCounterAction(settingFilters.price.min));
        dispatch(setMaxValueCounterAction(settingFilters.price.max));
    };
    const toggleManufacturerHandler = (value: string) => {
        if (settingFilters.manufacturers.includes(value)) {
            settingFiltersDispatch({type: 'REMOVE_MANUFACTURER', payload: value});
        } else {
            settingFiltersDispatch({type: 'ADD_MANUFACTURER', payload: value})
        }
    };
    const setMinValueHandler = (value: number) => {
        settingFiltersDispatch({type: 'SET_MIN_VALUE', payload: value});
    }
    const setMaxValueHandler = (value: number) => {
        settingFiltersDispatch({type: 'SET_MAX_VALUE', payload: value});
    }

    const clearFilterHandler = () => {
        dispatch(resetTypesProducts());
        dispatch(resetFilters());
        settingFiltersDispatch({type: 'RESET', payload: null});
    };

    const addTypeHandler = (value: string) => {
        if (selectTypes.includes(value)) {
            dispatch(removeProductAction(value));
        } else {
            dispatch(addProductAction(value));
        }
    };

    return (
        <aside className={`${styles.aside} ${className || ''}`}>
            <h3 className={`${styles.title} ${styles.title_tt}`}>
                ПОДБОР ПО ПАРАМЕТРАМ
            </h3>
            <Button isRounded={true} class={`${styles['filter-show']} ${isShow && styles['active']}`}
                    imageClass={styles['filter-show_image']}
                    onClick={() => setIsShow(prevState => !prevState)}
                    urlImage={arrowUpImage}/>
            <div className={`${styles.blocks} ${isShow ? styles.active : ''}`}>
                <div className={styles.block}>
                    <h4 className={styles.subtitle}>Цена <span className={styles.subtitle_value}>{CURRENCY}</span></h4>
                    <RangeValueCounter min={getMinValue(products)}
                                       max={getMaxValue(products)}
                                       setMin={setMinValueHandler}
                                       setMax={setMaxValueHandler}
                    />
                </div>
                <div className={`${styles.block} ${styles.block_border}`}>
                    <h3 className={`${styles.title}`}>
                        Производитель
                    </h3>
                    <FilterBlock list={manufacturers.filteredManufacturers}
                                 onSearch={(value) => searchHandler(value)}
                                 onChangeState={toggleManufacturerHandler}
                                 state={settingFilters.manufacturers}
                                 countPerView={COUNT_PER_VIEW_MANUFACTURERS}/>
                </div>
                <div className={styles.actions}>
                    <Button isRounded={false} title={'Показать'} onClick={useFilterHandler} class={styles.show}/>
                    <Button isRounded={true} onClick={clearFilterHandler} urlImage={trashImage}/>
                </div>

                <ul>
                    {types.map((item) => <li
                        className={`${styles.block} ${styles.block_border} ${styles.type} ${selectTypes.includes(item) && styles.active}`}
                        key={item}>
                        <button type={"button"} className={`${styles['type-button']}`}
                                onClick={() => addTypeHandler(item)}>
                            {item}
                        </button>
                    </li>)}
                </ul>
            </div>
        </aside>
    );
};
export default Filter;