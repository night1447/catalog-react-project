import {typesProductSlice} from "./typesProductSlice";
import {IProduct} from "./typesProductTypes";

const actions = typesProductSlice.actions;

export const removeProductAction = (payload: number) => actions.removeTypeProduct(payload);
export const addProductAction = (payload: IProduct) => actions.addTypeProduct(payload);
export const setTypesProductAction = (payload: string[]) => actions.setAllTypesProduct(payload);