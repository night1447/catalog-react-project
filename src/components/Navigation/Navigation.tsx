import {NavigationList} from "./NavigationList/NavigationList";
import styles from './navigation.module.scss'

interface NavigationProps {
    classes?: string[],
}

export const Navigation = (props: NavigationProps) => {
    return (
        <nav className={`${styles.nav} ${props.classes?.join(' ') || ''}`}>
            <NavigationList/>
        </nav>
    );
};