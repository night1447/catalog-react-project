import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {filterStateType} from "./FilterType";


const initialState: filterStateType = {
    counter: {
        min: 0,
        max: 0,
    },
    manufacturers: [],
}
export const FilterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        setMinValueCounter(state, action: PayloadAction<number>) {
            state.counter.min = action.payload;
        },
        setMaxValueCounter(state, action: PayloadAction<number>) {
            state.counter.max = action.payload;
        },
        setManufacturer(state, action: PayloadAction<string[]>) {
            state.manufacturers = action.payload;
        },
        removeManufacturer(state, action: PayloadAction<string>) {
            state.manufacturers.filter((manufacturer) => manufacturer !== action.payload);
        },
        resetFilters(state) {
            state = initialState;
            return state;
        }
    },
})