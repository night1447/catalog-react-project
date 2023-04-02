import {CatalogPage} from "../pages/CatalogPage/CatalogPage";
import {routes} from "./routes";
import {ProductPage} from "../pages/ProductPage/ProductPage";
import {RouteObject} from "react-router";
import {AdminPage} from "../pages/AdminPage/AdminPage";
import {MainPage} from "../pages/MainPage/MainPage";
import {TrashPage} from "../pages/TrashPage/TrashPage";
import {ErrorPage} from "../pages/ErrorPage/ErrorPage";

export const Routing: RouteObject[] = [
    {
        element: <CatalogPage/>,
        path: routes.CATALOG,
    },
    {
        element: <ProductPage/>,
        path: routes.PRODUCT,
    },
    {
        element: <AdminPage/>,
        path: routes.ADMIN
    },
    {
        element: <MainPage/>,
        path: routes.MAIN,
    },
    {
        element: <TrashPage/>,
        path: routes.TRASH,
    },
    {
        element: <ErrorPage/>,
        path: routes.ERROR,
    }
]