import styles from "./loading.module.scss"
import loadingImage from "../../assets/handlers/loading.gif"

export const Loading = () => {
    return (
        <div className={styles.loading}>
            <img src={loadingImage} alt='loading'/>
        </div>
    );
};