import React from 'react'
import {Dispatch} from "redux";
import {authAPI, meResponseDataType} from "../api/api";

const initialState = {
    data: {
        // NaN and "" is not right!! it must be null, need to fix!!
        userId: null,
        email: "",
        login: ""
    } as meResponseDataType,
    isAuth: false
}

const authReducer = (state: initialStateType = initialState, action: AuthActionCreatorTypes): initialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        default:
            return state;
    }
}
export default authReducer;

// actions
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => (
    {type: 'SET-USER-DATA', payload: {userId, email, login, isAuth}} as const);


// thunks
export const getAuthUserData = () => {
    return (dispatch: Dispatch<AuthActionCreatorTypes>) => {
        authAPI.me().then(data => {
            if (data.resultCode === 0) {
                let {userId, email, login} = data.data;
                dispatch(setAuthUserData(userId, email, login, true))
            }
        })
    }
}

export const loginTC = (email: string | null, password: string | null, rememberMe: boolean) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
}
export const logoutTC = () => (dispatch: Dispatch<AuthActionCreatorTypes>) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}

// types
export type initialStateType = typeof initialState;
export type AuthActionCreatorTypes = ReturnType<typeof setAuthUserData>