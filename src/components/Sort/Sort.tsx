import styles from './sort.module.scss'
import arrowImage from "../../assets/decor/helpers/select-icon.svg"
import {BaseSyntheticEvent} from "react";
import {useDispatch} from "react-redux";
import {setOptionCreator} from '../../store/reducers/Filters/Sort/sortAction'
import {options} from "./constants";

interface SortProps {
    class?: string,
}

export const Sort = (props: SortProps) => {
    const dispatch = useDispatch();
    const setSortOptionHandler = (event: BaseSyntheticEvent): void => {
        dispatch(setOptionCreator({
            sort: `${event.target.value}`,
        }));
    };

    return (
        <div className={`${styles.sort} ${props.class || ''}`}>
            <div className={styles.title}>Сортировка:</div>
            <div className={styles.wrapper}
                 style={{backgroundImage: `url(${arrowImage})`}}>
                <select name="sort-select"
                        id="sort-select"
                        onChange={setSortOptionHandler}
                        className={styles.select}
                >
                    {options.map(item => <option value={item.value} key={item.value}>{item.title}</option>)}
                </select>
            </div>
        </div>
    );
};