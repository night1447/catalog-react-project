import React from "react";
import {BreadcrumbsPage} from "../BreadcrumbsPage/BreadcrumbsPage";
import {Catalog} from "../../components/Catalog/Catalog";

export const CatalogPage = () => {
    return (
        <BreadcrumbsPage>
            <Catalog/>
        </BreadcrumbsPage>
    );
};