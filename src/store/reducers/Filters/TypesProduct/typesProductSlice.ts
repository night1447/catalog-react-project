import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IState} from "./typesProductTypes";


const initialState: IState = {
    selectedTypesProduct: [],
    typesProduct: ['Уход за телом','Уход за ногами'],
}

export const typesProductSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setAllTypesProduct(state, action: PayloadAction<string[]>) {
            state.typesProduct = action.payload;
        },
        addTypeProduct(state, action: PayloadAction<string>) {
            state.selectedTypesProduct.push(action.payload);
        },
        removeTypeProduct(state, action: PayloadAction<string>) {
            state.selectedTypesProduct = state.selectedTypesProduct.filter(item => item !== action.payload);
        },
        resetTypesProducts(state) {
            state.selectedTypesProduct = initialState.selectedTypesProduct;
        }
    }
})

