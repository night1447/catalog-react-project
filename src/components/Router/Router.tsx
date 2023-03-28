import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import App from "../../App";

const router = createBrowserRouter([
    {
        path: "/hello",
        element: <div>Hello world!</div>,
    },
    {
        path: '/',
        element: <Main/>,
        errorElement: <div> Error</div>,
    },
]);
export const Router = () => {
    return (
        <RouterProvider router={router}/>
    );
};