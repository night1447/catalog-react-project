import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICatalogProduct} from "../../../models/ICatalogProduct";

interface ProductState {
    products: ICatalogProduct[],
}

const initialState: ProductState = {
    products: [],
};
export const ProductSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setProducts(state, action: PayloadAction<ICatalogProduct[]>) {
            state.products = action.payload;
        },
        editProduct(state, action: PayloadAction<ICatalogProduct>) {
            const id = state.products.findIndex(item => item.id === action.payload.id);
            state.products[id] = action.payload;
        },
        deleteProduct(state, action: PayloadAction<number>) {
            state.products = state.products.filter(item => item.id !== action.payload);
        }
    }
})