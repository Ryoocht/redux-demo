import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCredentials } from './RTKAuthSlice'
import { useLoginMutation } from '../../app/services/authApiSlice'

const Login:React.FC = () => {
    const [ user, setUser ] = useState('')
    const [ pwd, setPwd ] = useState('')
    const [ errMsg, setErrMsg ] = useState('')

    const [ login, { isLoading }] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        setErrMsg('')
    },[user, pwd])

    const handleSubmit:React.ChangeEventHandler<HTMLInputElement> = async (e) => {
        e.preventDefault()
        try {
            const userData = await login({ user, pwd }).unwrap()
            dispatch(setCredentials({user, accessToken: 'sample_token'}))
            setUser('')
            setPwd('')
            //navigate to home screen
        } catch (error) {
            // if(!error?.response){
            //     setErrMsg('no Server Response')
            // } else if (error.response?.status === 400) {
            //     setErrMsg('Missing Username or Password')
            // } else if (error.response?.status === 401) {
            //     setErrMsg('Unauthorized')
            // } else {
            //     setErrMsg('Login Failed')
            // }
        }
    }

    const handleUserInput:React.ChangeEventHandler<HTMLInputElement> = (e) => setUser(e.target.value)
    const handlePwdInput:React.ChangeEventHandler<HTMLInputElement> = (e) => setPwd(e.target.value)

    return (
        <div>Login</div>
    )
}

export default Login