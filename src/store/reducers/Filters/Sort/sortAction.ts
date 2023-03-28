import {SortSlice} from "./SortSlice";
import {SortPayload} from "./sortTypes";

const actions = SortSlice.actions;

export const setOptionCreator = (payload: SortPayload) => actions.setOption(payload);