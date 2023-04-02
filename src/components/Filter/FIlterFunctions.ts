import {ICatalogProduct} from "../../models/ICatalogProduct";
import {checkboxType} from "./FilterTypes";

export const getAllManufacturers = (products: ICatalogProduct[]): checkboxType[] => {
    const map: Map<string, number> = new Map();
    products.forEach(product => {
        let count = map.get(product.manufacturer);
        map.set(product.manufacturer, count ? count + 1 : 1);
    })
    const massive: checkboxType[] = [];
    map.forEach((value, key) => {
        massive.push({
            count: value || 0,
            title: key,
        })
    })
    return massive;
};
export const getFilteredManufactures = (manufacturers: checkboxType[], value: string) => {
    return manufacturers.filter(manufacturer => manufacturer.title.toLowerCase().trim().includes(value.toLowerCase().trim()))
}
export const getMinValue = (products: ICatalogProduct[]): number => {
    const min = Math.min(...products.map(product => product.price));
    if (!Number.isFinite(min)) {
        return 0
    }
    return min;
};
export const getMaxValue = (products: ICatalogProduct[]): number => {
    const max = Math.max(...products.map(product => product.price));
    if (!Number.isFinite(max)) {
        return 0
    }
    return max;
}
