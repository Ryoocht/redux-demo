import { configureStore } from '@reduxjs/toolkit'
import { api } from './services/api'
import advancedCounterReducer from '../features/advancedCounter/advancedCounterSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const advancedStore = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        pokemonCounter: advancedCounterReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof advancedStore.getState>
export type AppDispatch = typeof advancedStore.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector