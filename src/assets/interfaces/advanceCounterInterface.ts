interface PokemonName {
   name: string
}

interface PokemonImage {
   front_shiny: string
}

interface Pokemon {
   species: PokemonName
   sprites: PokemonImage
}

export interface IPokemon {
   results: Pokemon[]
}