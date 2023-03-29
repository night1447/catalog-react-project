import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {ICatalogProduct} from "../models/ICatalogProduct";


const defaultPath = './data.json';
export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl: defaultPath}),
    tagTypes: ['Product'],
    endpoints: build => ({
        fetchAllProducts: build.query<ICatalogProduct[], number>({
            query: (limit: number = 9) => ({
                url: '',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ["Product"]
        }),
        createProduct: build.mutation<ICatalogProduct, ICatalogProduct>({
            query: (product: ICatalogProduct) => ({
                url: "",
                method: 'POST',
                body: product
            }),
            invalidatesTags: result => ['Product']
        }),
        updateProduct: build.mutation<ICatalogProduct, ICatalogProduct>({
            query: (product: ICatalogProduct) => ({
                url: `${product.id}`,
                method: 'PUT',
                body: product
            }),
            invalidatesTags: result => ['Product']
        }),
        deleteProduct: build.mutation<ICatalogProduct, ICatalogProduct>({
            query: (product: ICatalogProduct) => ({
                url: `/${product.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: result => ['Product']
        }),
    })
});
