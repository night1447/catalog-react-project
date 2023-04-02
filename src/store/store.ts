import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./reducers";
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {localStorageMiddleware} from "./middleware/localStorageMiddleware";

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(localStorageMiddleware),
})
export const persistor = persistStore(store);
export default store;
