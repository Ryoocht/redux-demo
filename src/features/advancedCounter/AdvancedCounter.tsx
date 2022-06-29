import React, { useState } from 'react'
import { useGetPokemonByNameQuery } from '../../app/services/pokemon'

type Pokemon = {
    name: string
    pollingInterval: number
}

const AdvanceCounter = () => {
    const pokemon = ['bulbasaur', 'pikachu', 'ditto', 'bulbasaur']
    const [pollingInterval, setPollingInterval] = useState(0)
    
    const RenderPokemons = ({ name, pollingInterval}: Pokemon) => {
        const { data, error, isLoading, isFetching } = useGetPokemonByNameQuery(name, { pollingInterval })
        return(
            <div key={name}>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                <h3>
                    {data.species.name} {isFetching ? '...' : ''}
                </h3>
                <img src={data.sprites.front_shiny} alt={data.species.name} />
                </>
            ) : null}
            </div>
        )
    }
    return (
        <div>
            <p>Advanced Counter</p>
            <select
                onChange={(e) => setPollingInterval(Number(e.target.value))}
            >
                <option value={0}>Off</option>
                <option value={1000}>1s</option>
                <option value={5000}>5s</option>
                <option value={10000}>10s</option>
            </select>
            {pokemon.map((poke, index) => (
                <RenderPokemons key={index} name={poke} pollingInterval={pollingInterval}/>
            ))}
        </div>
    )
}

export default AdvanceCounter