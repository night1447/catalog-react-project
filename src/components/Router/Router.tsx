import React, {FC, Suspense} from "react";
import {Routing} from "./routing";
import {Route, Routes} from "react-router-dom";

export const Router: FC = () => {
    return (
        <Suspense>
            <Routes>
                {Routing.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}/>)}
            </Routes>
        </Suspense>
    );
};