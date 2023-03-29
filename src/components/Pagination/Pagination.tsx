import React, {useState} from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss'
import {SrOnly} from "../../UI/SrOnly/SrOnly";
import arrowImage from '../../assets/arrow-orange.svg'

const RANGE = 2;
const getCountPages = (count: number, countViewProduct: number) => Math.round(count / countViewProduct);

type PaginationProps = {
    count: number,
    countViewProduct: number,
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
export const Pagination = ({count, countViewProduct, class: className, onPageChange}: PaginationProps) => {
    const [currentPage, setCurrentPage] = useState(0);
    if (count <= countViewProduct) {
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
                pageCount={getCountPages(count, countViewProduct)}
                pageClassName={`${styles.item}`}
                pageRangeDisplayed={RANGE}
                previousLabel={<ButtonNavigation isNext={false}/>}
            /></div>
    );
};