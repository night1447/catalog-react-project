import React from 'react';
import {BreadcrumbsPage} from "../BreadcrumbsPage/BreadcrumbsPage";
import {Product} from "../../components/Product/Product";

export const ProductPage = () => {
    return (
        <BreadcrumbsPage>
            <Product/>
        </BreadcrumbsPage>
    );
};