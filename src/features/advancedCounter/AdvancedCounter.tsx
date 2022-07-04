import React from 'react'
import { useGetPokemonByIdQuery } from '../../app/services/pokemon'
import { pokemonIdType } from '../../assets/types/pokemonTypes'
import { useAppDispatch, useAppSelector } from '../../app/advancedStore'
import {
    increment,
    decrement,
    incrementByAmount,
    selectCount
} from './advancedCounterSlice'

const AdvanceCounter = () => {
    const pokemonCount = useAppSelector(selectCount)
    const dispatch = useAppDispatch()

    const RenderPokemonsById = ({ id }: pokemonIdType) => {
        const { data, error, isLoading, isFetching } = useGetPokemonByIdQuery(id)
        return (
            <div key={id}>
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
            <div>
                <button
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <span>{pokemonCount}</span>
                <button
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
                <button
                    onClick={(e) => dispatch(incrementByAmount(pokemonCount))}
                >
                    Add {pokemonCount}
                </button>
            </div>
            {Array(pokemonCount).fill(1).map((_, i) => (
                <RenderPokemonsById key={i} id={i + 1}/>
            ))}
        </div>
    )
}

export default AdvanceCounter