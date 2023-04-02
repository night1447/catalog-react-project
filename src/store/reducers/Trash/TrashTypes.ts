import {ICatalogProduct} from "../../../models/ICatalogProduct";

export interface TrashProduct {
    count: number,
    product: number,
}

export interface TrashState {
    count: number,
    totalPrice: string,
    products: TrashProduct[],
}

export interface AddedTrashProduct {
    count: number,
    product: ICatalogProduct
}