import React from "react";
import {Error} from "../../UI/Error/Error"
import {RouteObject} from "react-router-dom";
import {CatalogPage} from "../../pages/CatalogPage/CatalogPage";
import {MainPage} from "../../pages/MainPage/MainPage";

export const Routing: RouteObject[] = [
    {
        element: <CatalogPage/>,
        path: '/catalog',
    },
    {
        element: <CatalogPage/>,
        path: '/product/:id',
    },
    {
        element: <MainPage/>,
        path: '/',
    }
    , {
        element: <Error/>,
        path: '*',
    }
]