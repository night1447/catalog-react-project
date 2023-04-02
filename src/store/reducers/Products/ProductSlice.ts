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
        addProduct(state, action: PayloadAction<ICatalogProduct>) {
            state.products.push(action.payload);
        },
        editProduct(state, action: PayloadAction<ICatalogProduct>) {
            state.products = state.products.map(item => item.id === action.payload.id ? action.payload : item);
        },
        deleteProduct(state, action: PayloadAction<ICatalogProduct>) {
            state.products = state.products.filter(item => item.id !== action.payload.id);
        }
    }
})