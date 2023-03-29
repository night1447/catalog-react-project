import styles from "./trash.module.scss"
import trashImage from "../../assets/trash.svg"
export const Trash = () => {
    return (
        <button className={styles.trash} type={"button"}>
            <span className={styles.img}
            style={{backgroundImage: `url(${trashImage})`}}>
                <span className={styles.count}>3</span>
            </span>
            <span className={styles.message}>
                Корзина
                <span className={styles.total}>12 478 ₸ </span>
            </span>
        </button>
    );
};