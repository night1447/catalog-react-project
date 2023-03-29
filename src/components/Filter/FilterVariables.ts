import {checkboxType, initialStateType} from "./FilterTypes";

export const COUNT_PER_VIEW_MANUFACTURERS = 3;
export let initialState: { manufacturers: checkboxType[], filteredManufacturers: checkboxType[] } = {
    manufacturers: [],
    filteredManufacturers: [],
};
export const settingsFilterState: initialStateType = {
    manufacturers: [],
    price: {
        min: 0,
        max: 0,
    }
};