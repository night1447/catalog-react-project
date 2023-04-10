import styles from "./main.module.scss"
import React, {FC, PropsWithChildren} from "react";


export const Main: FC<PropsWithChildren> = ({children}) => {
    return (
        <main className={styles.main}>
            {children}
        </main>
    );
};