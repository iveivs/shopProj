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
                    params: 
                }
            ),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = rtkApi