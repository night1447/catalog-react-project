import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {ICatalogProduct} from "../models/ICatalogProduct";


export const ProductService = createApi({
    reducerPath: 'dataAPI',
    baseQuery: fetchBaseQuery({baseUrl: './data.json'}),
    tagTypes: ['dataAPI'],
    endpoints: build => ({
        fetchAllProducts: build.query<ICatalogProduct[], number>({
            query: (limit: number = 9) => ({
                url: '',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ["dataAPI"]
        }),
        createProduct: build.mutation<ICatalogProduct, ICatalogProduct>({
            query: (post: ICatalogProduct) => ({
                url: "",
                method: 'POST',
                body: post
            }),
            invalidatesTags: result => ['dataAPI']
        }),
        updateProduct: build.mutation<ICatalogProduct, ICatalogProduct>({
            query: (post: ICatalogProduct) => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: result => ['dataAPI']
        }),
        deleteProduct: build.mutation<ICatalogProduct, ICatalogProduct>({
            query: (post: ICatalogProduct) => ({
                url: `/posts/${post.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: result => ['dataAPI']
        }),
    })
});