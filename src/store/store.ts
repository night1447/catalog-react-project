import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./reducers/index";

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type filterStoreType = ReturnType<typeof setupStore>;
export type typeSortDispatch = filterStoreType['dispatch'];