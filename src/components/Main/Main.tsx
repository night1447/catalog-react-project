import styles from "./main.module.scss"
import React from "react";

interface MainProps {
    children: React.ReactNode
}

export const Main = (props : MainProps) => {
    return (
        <main className={styles.main}>
            {props.children}
        </main>
    );
};