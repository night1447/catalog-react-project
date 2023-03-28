import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct, IState} from "./typesProductTypes";


const initialState: IState = {
    selectedTypesProduct: [],
    typesProduct: [],
}

export const typesProductSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setAllTypesProduct(state, action: PayloadAction<string[]>) {
            state.typesProduct = action.payload;
        },
        addTypeProduct(state, action: PayloadAction<IProduct>) {
            state.selectedTypesProduct.push(action.payload);
        },
        removeTypeProduct(state, action: PayloadAction<number>) {
            state.selectedTypesProduct = state.selectedTypesProduct.filter(item => item.id !== action.payload);
        }
    }
})

