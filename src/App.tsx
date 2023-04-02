import React from 'react';
import './app.scss';
import store, {persistor} from "./store/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {RouterProvider} from "react-router-dom";
import router from "./routes/index";

const App = () => {
    return <Provider store={store}>
        <PersistGate persistor={persistor}>
            <RouterProvider router={router}/>
        </PersistGate>
    </Provider>
}

export default App;
