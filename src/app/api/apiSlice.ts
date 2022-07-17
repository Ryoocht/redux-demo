import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../../features/RTKAuth/RTKAuthSlice'
import { RootState } from '../authStore'

const baseQuery = fetchBaseQuery({
    baseUrl: '',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token
        if(token){
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers
    }
})

// const baseQueryWithReAuth = async (args, api, extraOptions) => {
//     let result = await baseQuery(args, api, extraOptions)
//     if (result?.error?.status === 403) {
//         console.log('sending refresh token')
//         //send refresh token to get new access token
//         const refreshResult = await baseQuery('/refresh', api, extraOptions)
//         console.log({refreshResult})
//         if (refreshResult?.data) {
//             const user = api.getState().auth.user
//             //store the new token
//             api.dispatch(setCredentials({...refreshResult.data, user}))
//             //retry the originak query with new access token
//             result = await baseQuery(args, api, extraOptions)
//         } else {
//             api.dispatch(logOut())
//         }
//     }
//     return result
// }

export const apiSlice = createApi({
    baseQuery: baseQuery,
    endpoints: builder => ({})
})