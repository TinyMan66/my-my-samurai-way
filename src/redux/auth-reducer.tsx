import React from "react"
import {authAPI, meResponseDataType, ResultCodeForCaptcha, ResultCodesEnum, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {AppThunk} from "./store";

const initialState = {
    data: {
        id: null as number | null,
        email: '',
        login: ''
    } as meResponseDataType,
    isAuth: false,
    captcha: null as null | string
}

const authReducer = (state: initialStateType = initialState, action: AuthActionTypes): initialStateType => {
    switch (action.type) {
        case 'auth/SET-USER-DATA':
        case 'auth/GET-CAPTCHA-URL-SUCCESS':
            return {...state, ...action.payload}
        default:
            return state;
    }
}
export default authReducer;

// actions
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean, captcha: string | null) => (
    {
        type: 'auth/SET-USER-DATA', payload: {
            data: {id, email, login},
            isAuth, captcha
        }
    } as const);

export const getCaptchaUrlSuccess = (captcha: string | null) => (
    {type: 'auth/GET-CAPTCHA-URL-SUCCESS', payload: {captcha}} as const);


// thunks
export const getAuthUserDataTC = (): AppThunk => async (dispatch) => {
    const data = await authAPI.me();

    if (data.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true, null))
    }
}

export const loginTC = (email: string | null, password: string | null, rememberMe: boolean, captcha: string | null): AppThunk => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);

    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserDataTC())
    } else {
        if (response.data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
            dispatch(getCaptchaUrlTC())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logoutTC = (): AppThunk => async (dispatch) => {
    const response = await authAPI.logout();

    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(setAuthUserData(null, null, null, false, null))
    }
}

export const getCaptchaUrlTC = (): AppThunk => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captcha = response.data.url
    dispatch(getCaptchaUrlSuccess(captcha))
}


// types
export type initialStateType = typeof initialState;
export type AuthActionTypes = ReturnType<typeof setAuthUserData>
    | ReturnType<typeof getCaptchaUrlSuccess>