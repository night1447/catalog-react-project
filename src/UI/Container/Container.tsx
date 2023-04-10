import React, {FC, PropsWithChildren} from 'react';
import styles from './container.module.css';


const Container: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>)
};

export default Container;