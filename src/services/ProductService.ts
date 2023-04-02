import {useHttp} from "../hooks/http.hooks";
import {ICatalogProduct} from "../models/ICatalogProduct";
import {useCallback} from "react";

export const useProductService = () => {
    const {request, hasLoading, hasError, clearError} = useHttp();
    const getAllProducts = useCallback(async () => {
        return await request('/data.json');
    }, [request])
    const transformProduct = (product: ICatalogProduct) => {
        return {
            ...product,
        }
    }
    const getProductById = useCallback(async (id: number) => {
        const result = await request('/data.json');
        return transformProduct(result[result.findIndex((item: ICatalogProduct) => item.id === id)]);
    }, [request])
    return {getAllProducts, getProductById, hasError, hasLoading, clearError}
}