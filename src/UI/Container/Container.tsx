import React from 'react';
import styles from './container.module.css';

interface IProps {
    children: React.ReactNode,
}

const Container = (props: IProps) => {
    return (
        <div className={styles.container}>
            {props.children}
        </div>)
};

export default Container;