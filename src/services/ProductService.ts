import {useHttp} from "../hooks/http.hooks";
import {ICatalogProduct} from "../models/ICatalogProduct";

export const useProductService = () => {
    const {request, hasLoading, hasError, clearError} = useHttp();
    const getAllProducts = async () => {
        return await request('/data.json');
    }
    const transformProduct = (product: ICatalogProduct) => {
        return {
            ...product,
        }
    }
    const getProductById = async (id: number) => {
        const result = await request('/data.json');
        return transformProduct(result[result.findIndex((item: ICatalogProduct) => item.id === id)]);
    }
    return {getAllProducts, getProductById, hasError, hasLoading, clearError}
}