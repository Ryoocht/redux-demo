import React from 'react'
import { useGetPokemonByIdQuery } from '../../app/services/pokemon'
import { pokemonIdType } from '../../assets/types/pokemonTypes'
import { useAppDispatch, useAppSelector } from '../../app/advancedStore'
import {
    increment,
    decrement,
    selectCount
} from './advancedCounterSlice'

const AdvanceCounter = () => {
    const pokemonCount = useAppSelector(selectCount)
    const dispatch = useAppDispatch()

    const RenderPokemonsById = ({ id }: pokemonIdType) => {
        const { data, error, isLoading, isFetching } = useGetPokemonByIdQuery(id)
        return (
            <div 
                key={id}
                className='pokemon_card_box'
            >
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <div className='loading_spinner'>
                    <hr/><hr/><hr/><hr/>
                </div>
            ) : data ? (
                <>
                    <p className='pokemon_name'>
                        {data.species.name} {isFetching ? '...' : ''}
                    </p>
                    <img src={data.sprites.front_shiny} alt={data.species.name} />
                </>
            ) : null}
            </div>
        )
    }

    return (
        <div>
            <p className='counter_title'>Advanced Counter</p>
            <div className='counter_container'>
                <button
                    onClick={() => dispatch(decrement())}
                    className='counter_btn'
                >
                    -
                </button>
                <span className='count'>
                    {pokemonCount}
                </span>
                <button
                    onClick={() => dispatch(increment())}
                    className='counter_btn'
                >
                    +
                </button>
            </div>
            <div className='pokemon_container'>
            {Array(pokemonCount).fill(1).map((_, i) => (
                <RenderPokemonsById key={i} id={i + 1}/>
            ))}
            </div>
        </div>
    )
}

export default AdvanceCounter