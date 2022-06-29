import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './newCounterStore'

interface CounterState {
    value: number
    status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterState = {
    value: 0,
    status: 'idle'
}

export const incrementAsync = createAsyncThunk

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    },
    // write extrareducers here
})

export const selectCount = (state: RootState) => state.counter.value

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer