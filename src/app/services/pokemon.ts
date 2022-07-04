import { api } from './api'

export const pokemonApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name: string) => `pokemon/${name}`,
        }),
        getPokemonById: builder.query({
            query: (id: number) => `pokemon/${id}`,
        })
    })
})

export const { useGetPokemonByNameQuery, useGetPokemonByIdQuery } = pokemonApi