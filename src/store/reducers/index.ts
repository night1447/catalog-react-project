import {combineReducers} from "redux";
import sortReducer from "./Filters/Sort/sortReducers";
import layoutReducer from "./Filters/Layout/LayoutReducer";
import typesProductReducer from "./Filters/TypesProduct/typesProductReducers";
import ProductReducer from "./Products/ProductReducer";
import filterReducer from "./Filters/Filter/FilterReducer";
import trashReducer from "./Trash/TrashReducer";


export const rootReducer = combineReducers({
    sortReducer: sortReducer,
    layoutReducer: layoutReducer,
    typesProductReducer: typesProductReducer,
    productReducer: ProductReducer,
    filterReducer: filterReducer,
    trashReducer: trashReducer,
})

export type RootReducerType = ReturnType<typeof rootReducer>;
