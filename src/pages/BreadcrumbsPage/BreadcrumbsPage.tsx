import React, {FC, PropsWithChildren} from 'react';
import {Breadcrumbs} from "../../components/Breadcrumbs/Breadcrumbs";
import Container from "../../UI/Container/Container";
import {Page} from "../Page/Page";

export const BreadcrumbsPage: FC<PropsWithChildren> = ({children}) => {
    return (
        <Page>
            <Container>
                <Breadcrumbs/>
            </Container>
            <section>
                <Container>
                    {children}
                </Container>
            </section>
        </Page>
    );
};