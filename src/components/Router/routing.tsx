import React from "react";
import {Main} from "../Main/Main";
import {Error} from "../../UI/Error/Error"
import { RouteObject } from "react-router-dom";

export const Routing: RouteObject[] = [
    {
        element: <Main/>,
        path: '/',
        errorElement: <Error>,
    }
]