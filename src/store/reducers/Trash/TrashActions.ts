import {TrashSlice} from "./TrashSlice";
import {ICatalogProduct} from "../../../models/ICatalogProduct";
import {AddedTrashProduct} from "./TrashTypes";

const actions = TrashSlice.actions;

export const addTrashProductAction = (payload: ICatalogProduct) => actions.addProduct(payload);
export const removeTrashProductAction = (payload: AddedTrashProduct) => actions.removeProduct(payload);
export const removePartTrashProductAction = (payload: ICatalogProduct) => actions.removePartProduct(payload);
export const addTrashProductsAction = (payload: AddedTrashProduct) => actions.addProducts(payload);
export const changeValuesAction = (payload: number) => actions.changeValues(payload);

export const resetProductsAction = () => actions.resetProducts();