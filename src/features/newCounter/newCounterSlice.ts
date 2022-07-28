import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchCount } from '../../fetchCount'
import { RootState } from './newCounterStore'

export interface OptionState {
    id: string
    name: string
    price: number
}

interface CounterState {
    count: number
    options?: OptionState[]
    status: 'idle' | 'loading' | 'failed' 
}

const initialState: CounterState = {
    count: 0,
    options: [],
    status: 'idle',
}

export const incrementAsync = createAsyncThunk(
    'counter/fetchCount',
    async (amount: number) => {
        const response = await fetchCount(amount)
        return response.data
    }
)

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count++
        },
        decrement: (state) => {
            state.count--
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.count += action.payload
        },
        addFreeNumber: (state, action:PayloadAction<number>) => {
            state.count += action.payload
        },
        addOption: (state, action:PayloadAction<OptionState>) => {
            state.options?.push(action.payload)
        },
        deleteOption: (state, action:PayloadAction<string>) => {
            const filteredOptions = state.options?.filter(option => option.id !== action.payload)
            state.options = filteredOptions
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(incrementAsync.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(incrementAsync.fulfilled, (state) => {
            state.status = 'idle'
            state.count++
        })
        .addCase(incrementAsync.rejected, (state) => {
            state.status = 'failed'
        })
    }
})

export const selectCount = (state: RootState) => state.counter
export const { increment, decrement, incrementByAmount, addFreeNumber, addOption, deleteOption  } = counterSlice.actions
export default counterSlice.reducer