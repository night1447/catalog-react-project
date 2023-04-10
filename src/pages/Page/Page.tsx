import React, {FC, PropsWithChildren} from 'react';
import {Main} from "../../components/Layout/Main/Main";
import {Header} from "../../components/Layout/Header/Header";
import {Footer} from "../../components/Layout/Footer/Footer";


export const Page: FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            <Header/>
            <Main>
                {children}
            </Main>
            <Footer/>
        </>
    );
};