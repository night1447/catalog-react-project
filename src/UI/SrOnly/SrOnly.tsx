import * as React from 'react';
import {FC, PropsWithChildren} from 'react';
import styles from "./sr-only.module.css"


export const SrOnly: FC<PropsWithChildren> = ({children}) => {
    return (
        <span className={styles.srOnly}>
            {children}
        </span>
    );
};