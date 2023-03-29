import {combineReducers} from "redux";
import sortReducer from "./Filters/Sort/sortReducers";
import layoutReducer from "./Filters/Layout/LayoutReducer";
import typesProductReducer from "./Filters/TypesProduct/typesProductReducers";
import ProductReducer from "./Products/ProductReducer";
import filterReducer from "./Filters/Filter/FilterReducer";


export const rootReducer = combineReducers({
    sortReducer: sortReducer,
    layoutReducer: layoutReducer,
    typesProductReducer: typesProductReducer,
    productReducer: ProductReducer,
    filterReducer: filterReducer,

})

export type RootReducerType = ReturnType<typeof rootReducer>;
