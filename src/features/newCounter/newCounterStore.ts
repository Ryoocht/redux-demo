import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import newCounterReducer from './newCounterSlice'

export const newCounterStore = configureStore({
    reducer: {
        counter: newCounterReducer,
    }
})

export type AppDispatch = typeof newCounterStore.dispatch
export type RootState = ReturnType<typeof newCounterStore.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>