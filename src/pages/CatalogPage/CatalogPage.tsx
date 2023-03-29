import React from "react";
import Container from "../../UI/Container/Container";
import {BreadcrumbsPage} from "../BreadcrumbsPage/BreadcrumbsPage";
import {Provider} from "react-redux";
import {setupStore} from "../../store/store";
import {Catalog} from "../../components/Catalog/Catalog";

export const CatalogPage = () => {
    return (
        <BreadcrumbsPage>
            <Provider store={setupStore()}>
                <section className={'catalog'}>
                    <Container>
                        <Catalog/>
                    </Container>
                </section>
            </Provider>
        </BreadcrumbsPage>
    );
};