import * as React from 'react';
import styles from "./sr-only.module.css"

type SrOnlyProps = {
    children: React.ReactNode,
};
export const SrOnly = (props: SrOnlyProps) => {
    return (
        <span className={styles.srOnly}>
            {props.children}
        </span>
    );
};