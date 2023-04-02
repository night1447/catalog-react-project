import {Middleware} from "@reduxjs/toolkit";
import {ProductSlice} from "../reducers/Products/ProductSlice";
import {changeValuesAction, removeTrashProductAction} from "../reducers/Trash/TrashActions";
import {TrashProduct} from "../reducers/Trash/TrashTypes";
import {ICatalogProduct} from "../../models/ICatalogProduct";

export const localStorageMiddleware: Middleware = ({dispatch, getState}) => (next) => (action) => {

    if (action.type === ProductSlice.actions.deleteProduct.type) {
        const massiveTrashProducts = getState().trashReducer.products;
        const itemIndex = massiveTrashProducts.findIndex((item: TrashProduct) => item.product === action.payload.id)
        if (itemIndex !== -1) {
            dispatch(removeTrashProductAction({count: massiveTrashProducts[itemIndex].count, product: action.payload}))
        }
    }
    if (action.type === ProductSlice.actions.editProduct.type) {
        const massiveProducts: ICatalogProduct[] = getState().productReducer.products;
        const massiveTrashProducts: TrashProduct[] = getState().trashReducer.products;
        const itemIndex = massiveProducts.findIndex((item: ICatalogProduct) => item.id === action.payload.id);
        const trashItemIndex = massiveTrashProducts.findIndex((item: TrashProduct) => item.product === action.payload.id);
        if (itemIndex !== -1 && trashItemIndex !== -1) {
            const item = massiveProducts[itemIndex];
            const trashItem = massiveTrashProducts[trashItemIndex];
            const difference = (action.payload.price - item.price) * trashItem.count;
            dispatch(changeValuesAction(difference))
        }
    }
    return next(action);
};