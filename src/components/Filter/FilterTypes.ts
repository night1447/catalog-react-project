import {ICatalogProduct} from "../../models/ICatalogProduct";

export type checkboxType = {
    count: number,
    title: string,
}
export type initialStateType = {
    manufacturers: string[],
    price: { min: number, max: number },

}

export interface FilterProps {
    class?: string,
    products: ICatalogProduct[],
}
