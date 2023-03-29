import styles from '../navigation.module.scss'
import {navigationItems} from "./constants";
import {NavigationItem} from "../NavigationItem/NavigationItem";


export const NavigationList = () => {
    return (
        <ul className={styles.list}>
            {navigationItems.map(item => <NavigationItem key={item.title} item={item}/>)}
        </ul>
    );
};