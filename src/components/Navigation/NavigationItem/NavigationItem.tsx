import {Link} from "react-router-dom";
import styles from "../navigation.module.scss";
import {INavigationItem} from "../NavigationList/types";

interface NavigationItemProps {
    item: INavigationItem,
}

export const NavigationItem = (props: NavigationItemProps) => {
    return (
        <li className={styles.item}>
            <Link className={styles.link} to={props.item.path}>{props.item.title}</Link>
        </li>
    );
};