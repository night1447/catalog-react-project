import React, {useState} from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pages.module.scss'
import {SrOnly} from "../../../UI/SrOnly/SrOnly";
import arrowImage from '../../../assets/arrow-orange.svg'

const RANGE = 2;
const getCountPages = (count: number, countViewProduct: number) => Math.round(count / countViewProduct);


type PagesProps = {
    count: number,
    countViewProduct: number,
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
export const Pages = ({count, countViewProduct}: PagesProps) => {
    const [currentPage, setCurrentPage] = useState(0);

    return (
        <div className={styles.block}>
            <ReactPaginate
                activeClassName={`${styles.item} ${styles.item_active}`}
                breakLabel={'...'}
                containerClassName={`${styles.pagination}`}
                marginPagesDisplayed={RANGE}
                onPageChange={(selectedItem) => setCurrentPage(selectedItem.selected)}
                nextLabel={<ButtonNavigation isNext={true}/>}
                pageCount={getCountPages(count, countViewProduct)}
                pageClassName={`${styles.item}`}
                pageRangeDisplayed={RANGE}
                previousLabel={<ButtonNavigation isNext={false}/>}
            /></div>
    );
};