import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { apiSlice } from './api/apiSlice'
import authReducer from '../features/RTKAuth/RTKAuthSlice'

export const authStore = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
})

export type RootState = ReturnType<typeof authStore.getState>
export type AppDispatch = typeof authStore.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector