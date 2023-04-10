import React from 'react';
import {Main} from "../../components/Layout/Main/Main";
import Container from "../../UI/Container/Container";
import {AdminComponent} from "../../components/AdminComponent/AdminComponent";

export const AdminPage = () => {
    return (
        <Main>
            <Container>
                <AdminComponent/>
            </Container>
        </Main>
    );
};