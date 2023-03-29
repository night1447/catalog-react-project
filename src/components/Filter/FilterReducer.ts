import {initialStateType} from "./FilterTypes";
import {settingsFilterState} from "./FilterVariables";

export const settingFiltersReducer = (state: initialStateType, action: { type: string, payload: any }) => {
    switch (action.type) {
        case 'ADD_MANUFACTURER':
            return ({
                ...state, manufacturers: [...state.manufacturers, action.payload]
            })
        case 'REMOVE_MANUFACTURER':
            return ({
                ...state, manufacturers: state.manufacturers.filter(item => item !== action.payload)
            })
        case 'REPLACE_MANUFACTURERS':
            return ({
                ...state, manufacturers: action.payload,
            })
        case  'SET_MIN_VALUE':
            return ({
                ...state, price: {
                    ...state.price,
                    min: action.payload
                }
            })
        case  'SET_MAX_VALUE':
            return ({
                ...state, price: {
                    ...state.price,
                    max: action.payload
                }
            })
        case "RESET":
            return settingsFilterState;
    }
    return state;
};
