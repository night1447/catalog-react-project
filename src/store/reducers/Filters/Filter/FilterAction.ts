import {FilterSlice} from "./FilterSlice";

const actions = FilterSlice.actions;

export const setManufacturerAction = (payload: string[]) => actions.setManufacturer(payload);
export const removeManufacturerAction = (payload: string) => actions.removeManufacturer(payload);
export const setMinValueCounterAction = (payload: number) => actions.setMinValueCounter(payload);
export const setMaxValueCounterAction = (payload: number) => actions.setMaxValueCounter(payload);
export const resetFilters = () => actions.resetFilters();