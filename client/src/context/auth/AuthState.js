import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../types'

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        user: null,
        loading: true,
        error: null
    }

    const [ state, dispatch ] = useReducer(authReducer, initialState)

    // Actions:

    // Load User
    const loadUser = () => {
        console.log(loadUser)
    }

    // Register User
    const register = async (formData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('http://localhost:5000/api/users', formData, config)

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data // should be token
            })
        } catch (err) {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg
            })
        }
    }

    // Login User
    const login = () => {
        console.log(login)
    }

    // Logout User
    const logout = () => {
        console.log(logout)
    }

    // Clear Errors
    const clearErrors = () => {
        console.log(clearErrors)
    }



    return (
        <AuthContext.Provider
            //  anything we want to access from other components, including state and actions
            value = {{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                user: state.user,
                loading: state.loading,
                error: state.error,
                register,
                loadUser,
                login,
                logout,
                clearErrors
            }} >
                { props.children }
        </AuthContext.Provider>
    )
    
}

export default AuthState
