import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SortPayload} from "./sortTypes";

const initialState = {
    sort: 'price',
}

export const SortSlice = createSlice({
    name: 'sort',
    initialState: initialState,
    reducers: {
        setOption(state, action: PayloadAction<SortPayload>) {
            state = action.payload;
            return state;
        }
    }
})

