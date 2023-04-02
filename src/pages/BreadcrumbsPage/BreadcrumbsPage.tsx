import React from 'react';
import {Breadcrumbs} from "../../components/Breadcrumbs/Breadcrumbs";
import Container from "../../UI/Container/Container";
import {Page} from "../Page/Page";

type Props = {
    children: React.ReactNode
};
export const BreadcrumbsPage = (props: Props) => {
    return (
        <Page>
            <Container>
                <Breadcrumbs/>
            </Container>
            <section>
                <Container>
                    {props.children}
                </Container>
            </section>
        </Page>
    );
};