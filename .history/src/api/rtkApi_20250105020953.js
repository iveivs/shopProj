import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const params = {
    _limit: 4,
    _sort: "rating",
    _order: "desc"
}

// Define a service using a base URL and expected endpoints
export const rtkApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: __API__ }),
    endpoints: (builder) => ({
        getPizzas: builder.query({
            query: (name) => (
                {
                    url: "./pizzas",
                    params: params,
                }
            ),
        }),
        getRolls: builder.query({
            query: (name) => (
                {
                    url: "./rolls",
                    params: params,
                }
            ),
        }),
        getOthers: builder.query({
            query: (name) => (
                {
                    url: "./other",
                    params: params,
                }
            ),
        }),
    }),
})


export const useGetPizzas = rtkApi.useGetPizzasQuery
export const useGetRolls = rtkApi.useGetRollsQuery
export const useGetOthers = rtkApi.useGetOthersQuery