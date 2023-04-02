import styles from "./trash.module.scss"
import trashImage from "../../assets/decor/helpers/trash.svg"
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Link} from "react-router-dom";
import {CURRENCY} from "../../constants/info";

export const Trash = () => {
    let trash = useTypedSelector(state => state.trashReducer);
    return (
        <Link to={'/trash'} className={styles.trash}>
            <span className={styles.img}
                  style={{backgroundImage: `url(${trashImage})`}}>
                <span className={styles.count}>{trash.count}</span>
            </span>
            <span className={styles.message}>
                Корзина
                <span className={styles.total}>{trash.totalPrice} {CURRENCY} </span>
            </span>
        </Link>
    );
};