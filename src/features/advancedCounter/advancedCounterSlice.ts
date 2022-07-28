import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/advancedStore"

interface CounterState {
    count: number
}

const initialState: CounterState = {
    count: 0
}

export const pokemonCounterSlice = createSlice({
    name: 'pokemonCounter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
    }
})

export const selectCount = ( state: RootState ) => state.pokemonCounter.count
export const { increment, decrement } = pokemonCounterSlice.actions
export default pokemonCounterSlice.reducer