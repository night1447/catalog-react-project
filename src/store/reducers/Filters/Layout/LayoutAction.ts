import {LayoutSlice} from "./LayoutSlice";
import {LayoutPayload} from "./LayoutTypes";

const actions = LayoutSlice.actions;

export const setLayoutAction = (payload: LayoutPayload) => actions.setLayout(payload);