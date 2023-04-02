import React from 'react';
import {BreadcrumbsPage} from "../BreadcrumbsPage/BreadcrumbsPage";
import {TrashSection} from "../../components/TrashSection/TrashSection";

export const TrashPage = () => {
    return (
        <BreadcrumbsPage>
            <TrashSection/>
        </BreadcrumbsPage>
    );
};