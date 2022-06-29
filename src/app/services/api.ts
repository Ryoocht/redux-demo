import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/dist/query/react"

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/',
    // prepareHeaders: (headers, { getState }) => {
    //     const token = (getState() as RootState).pokemonApi
    //     if (token) {
    //         headers.set('authentication', `Bearer ${token}`)
    //     }
    //     return headers
    // },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 })

export const api = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: baseQueryWithRetry,
    tagTypes: [],
    endpoints: () => ({}),
})