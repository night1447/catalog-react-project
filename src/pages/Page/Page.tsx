import React from 'react';
import {Main} from "../../components/Main/Main";
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";

interface PageProps {
    children: React.ReactNode,
}

export const Page = (props: PageProps) => {
    return (
        <>
            <Header/>
            <Main>
                {props.children}
            </Main>
            <Footer/>
        </>
    );
};