import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./reducers/rootReducer";

export const sortStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type filterStoreType = ReturnType<typeof sortStore>;
export type typeSortDispatch = filterStoreType['dispatch'];