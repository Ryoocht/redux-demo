import { api } from './api'
import { PokemonType } from '../../assets/types/pokemonTypes'

export const pokemonApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name: string) => `pokemon/${name}`,
        }),
    })
})

export const { useGetPokemonByNameQuery } = pokemonApi