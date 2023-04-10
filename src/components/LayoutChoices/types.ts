import {LayoutPayload} from "../../store/reducers/Filters/Layout/LayoutTypes";

export interface LayoutProps {
    class?: string,
}

export interface IChoises extends LayoutPayload {
    urlImage: string,
}