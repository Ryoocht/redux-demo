import { User, UserObj } from '../../features/RTKAuth/RTKAuthSlice'
import { apiSlice } from '../api/apiSlice'

type Login = {
    user: string
    pwd: string
}

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation<UserObj, Login>({
            query: credentials => ({
                url: '/auth',
                method: 'POST',
                body: {...credentials}
            })
        })
    })
})

export const { useLoginMutation } = authApiSlice