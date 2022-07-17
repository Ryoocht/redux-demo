import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/authStore'

export interface User {
    user: {} | null | undefined
    token: string | null | undefined
}

export interface UserObj {
    user: {} | undefined
    accessToken: string | undefined
}

const initialState: User = {
    user: null,
    token: null
}

const authSlice = createSlice({
    name: 'rtk_auth',
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<UserObj>) => {
            const { user, accessToken } = action.payload
            state.user = user
            state.token = accessToken
        },
        logOut: (state) => {
            state.user = null
            state.token = null
        }
    }
})

export const { setCredentials, logOut } = authSlice.actions
export default authSlice.reducer
export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectCurrentToken = (state: RootState) => state.auth.token 