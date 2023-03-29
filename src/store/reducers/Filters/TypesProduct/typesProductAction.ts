import {typesProductSlice} from "./typesProductSlice";

const actions = typesProductSlice.actions;

export const removeProductAction = (payload: string) => actions.removeTypeProduct(payload);
export const addProductAction = (payload: string) => actions.addTypeProduct(payload);
export const setTypesProductAction = (payload: string[]) => actions.setAllTypesProduct(payload);
export const resetTypesProducts = () => actions.resetTypesProducts();