import React from 'react';
import {Breadcrumbs} from "../../components/Breadcrumbs/Breadcrumbs";
import Container from "../../UI/Container/Container";

type Props = {
    children: React.ReactNode
};
export const BreadcrumbsPage = (props: Props) => {
    return (
        <>
            <Container>
                <Breadcrumbs/>
            </Container>
            {props.children}
        </>
    );
};