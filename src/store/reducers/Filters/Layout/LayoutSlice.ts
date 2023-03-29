import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LayoutPayload} from "./LayoutTypes";

const initialState: LayoutPayload = {
    layout: 'grid',
}

export const LayoutSlice = createSlice({
    name: 'layout',
    initialState: initialState,
    reducers: {
        setLayout(state, action: PayloadAction<LayoutPayload>) {
            state = action.payload;
            return state;
        }
    }
})

