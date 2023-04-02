import {ProductSlice} from "./ProductSlice";
import {ICatalogProduct} from "../../../models/ICatalogProduct";

const actions = ProductSlice.actions;

export const setProductsAction = (payload: ICatalogProduct[]) => actions.setProducts(payload);
export const deleteProductAction = (payload: ICatalogProduct) => actions.deleteProduct(payload);
export const editProductAction = (payload: ICatalogProduct) => actions.editProduct(payload);
export const addMainProductAction = (payload: ICatalogProduct) => actions.addProduct(payload);