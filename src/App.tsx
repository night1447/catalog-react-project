import React from 'react';
import './app.scss';
import {Router} from "./components/Router/Router";
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";

const App = () => {
    return <>
        <Header/>
        <Main>
            <Router/>
        </Main>
        <Footer/>
    </>
}

export default App;
