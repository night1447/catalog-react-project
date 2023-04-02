import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICatalogProduct} from "../../../models/ICatalogProduct";
import {AddedTrashProduct, TrashState} from "./TrashTypes";

const initialState: TrashState = {
    count: 0,
    totalPrice: '0',
    products: [],
}

export const TrashSlice = createSlice({
    name: 'trash',
    initialState: initialState,
    reducers: {
        addProduct(state, action: PayloadAction<ICatalogProduct>) {
            state.count++;
            state.totalPrice = (+state.totalPrice + +action.payload.price).toFixed(2);
            const index = state.products.findIndex(item => item.product === action.payload.id);
            if (index !== -1) {
                state.products[index].count += 1;
            } else {
                state.products.push({count: 1, product: action.payload.id});
            }
        },
        changeValues(state, action: PayloadAction<number>) {
            state.totalPrice = (+state.totalPrice + action.payload).toFixed(2);
        },
        removeProduct(state, action: PayloadAction<AddedTrashProduct>) {
            state.count -= action.payload.count;
            state.totalPrice = (+state.totalPrice - action.payload.product.price * action.payload.count).toFixed(2);
            state.products = state.products.filter(item => item.product !== action.payload.product.id);
            return state;
        },
        resetProducts(state) {
            state.count = 0;
            state.totalPrice = '0';
            state.products = [];
        },
        removePartProduct(state, action: PayloadAction<ICatalogProduct>) {
            state.count--;

            state.totalPrice = (+state.totalPrice - action.payload.price).toFixed(2);
            const index = state.products.findIndex(item => item.product === action.payload.id);
            state.products[index].count--;
            if (state.count === 0) {
                state.products.splice(index, 1);
            }
        },
        addProducts(state, {payload}: PayloadAction<AddedTrashProduct>) {
            const index = state.products.findIndex(item => item.product === payload.product.id);
            if (index === -1) {
                state.products.push({count: payload.count, product: payload.product.id});
                state.count += payload.count;
                state.totalPrice = (+state.totalPrice + payload.product.price * payload.count).toFixed(2);
            } else {
                state.products[index].count += payload.count;
                state.count += payload.count;
                state.totalPrice = (+state.totalPrice + payload.product.price * payload.count).toFixed(2);
            }
        }
    },
})