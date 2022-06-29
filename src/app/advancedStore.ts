import { configureStore } from '@reduxjs/toolkit'
import { api } from './services/api'

export const advancedStore = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof advancedStore.getState>
export type AppDispatch = typeof advancedStore.dispatch