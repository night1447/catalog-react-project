import React, {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss'
import {SrOnly} from "../../UI/SrOnly/SrOnly";
import arrowImage from '../../assets/decor/arrows/arrow-orange.svg'
import {COUNT_VIEW_PRODUCT} from "../../constants/filter";

const RANGE = 2;
const getCountPages = (count: number, countViewProduct: number) => {
    return Math.ceil(count / countViewProduct);
}

type PaginationProps = {
    count: number,
    class: string,
    onPageChange: (page: number) => void,
};

interface ButtonNavigationProps {
    isNext: boolean
}

const ButtonNavigation = ({isNext}: ButtonNavigationProps) => {
    return (<button type={"button"}
                    style={{backgroundImage: `url(${arrowImage})`}}
                    className={`${styles.button} ${isNext ? '' : styles.button_prev}`}>
        <SrOnly>
            Переключить страницу
        </SrOnly>
    </button>)
}
export const Pagination = ({count, class: className, onPageChange}: PaginationProps) => {
    const [currentPage, setCurrentPage] = useState(0);
    useEffect(() => {
        setCurrentPage(0);
    }, [count]);

    if (count <= COUNT_VIEW_PRODUCT) {
        return (
            <></>
        );
    }
    return (
        <div className={`${styles.block} ${className}`}>
            <ReactPaginate
                activeClassName={`${styles.item} ${styles.item_active}`}
                breakLabel={'...'}
                containerClassName={`${styles.pagination}`}
                marginPagesDisplayed={RANGE}
                onPageChange={(selectedItem) => {
                    onPageChange(selectedItem.selected);
                    setCurrentPage(selectedItem.selected)
                }}
                nextLabel={<ButtonNavigation isNext={true}/>}
                pageCount={getCountPages(count, COUNT_VIEW_PRODUCT)}
                pageClassName={`${styles.item}`}
                pageRangeDisplayed={RANGE}
                previousLabel={<ButtonNavigation isNext={false}/>}
            /></div>
    );
};