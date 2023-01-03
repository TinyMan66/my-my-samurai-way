import React from "react"
import {authAPI, meResponseDataType, ResultCodesEnum} from "../api/api";
import {stopSubmit} from "redux-form";
import {AppThunk} from "./store";

const initialState = {
    data: {
        userId: null,
        email: '',
        login: ''
    } as meResponseDataType,
    isAuth: false
}

const authReducer = (state: initialStateType = initialState, action: AuthActionTypes): initialStateType => {
    switch (action.type) {
        case 'auth/SET-USER-DATA':
            return {...state, ...action.payload}
        default:
            return state;
    }
}
export default authReducer;

// actions
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => (
    {type: 'auth/SET-USER-DATA', payload: {userId, email, login, isAuth}} as const);


// thunks
export const getAuthUserDataTC = (): AppThunk => async (dispatch) => {
    const data = await authAPI.me();

    if (data.resultCode === ResultCodesEnum.Success) {
        let {userId, email, login} = data.data;
        dispatch(setAuthUserData(userId, email, login, true))
    }
}

export const loginTC = (email: string | null, password: string | null, rememberMe: boolean): AppThunk => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserDataTC())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}))
    }
}
export const logoutTC = (): AppThunk => async (dispatch) => {
    const response = await authAPI.logout();

    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

// types
export type initialStateType = typeof initialState;
export type AuthActionTypes = ReturnType<typeof setAuthUserData>