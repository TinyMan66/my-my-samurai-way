import React from "react";
import {getAuthUserDataTC} from "./auth-reducer";
import {AppThunk} from "./store";

const INITIALIZED_SUCCESS = 'app/INITIALIZED-SUCCESS';
const SET_GLOBAL_ERROR = 'app/SET-GLOBAL-ERROR';

const initialState = {
    initialized: false,
    globalError: null as null | string
}

export const appReducer = (state: InitialStateType = initialState, action: AppActionTypes): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        case SET_GLOBAL_ERROR:
            return {
                ...state,
                globalError: action.globalError
            }
        default:
            return state;
    }
}

// actions
export const initializedSuccessAC = () => ({type: INITIALIZED_SUCCESS} as const);
export const setGlobalErrorAC = (globalError: null | string) => ({type: SET_GLOBAL_ERROR, globalError} as const);

// thunks
export const initializeAppTC = (): AppThunk => async (dispatch) => {
    await dispatch(getAuthUserDataTC())
    dispatch(initializedSuccessAC())
}
export const globalErrorTC = (globalError: null | string): AppThunk => async (dispatch) => {
    dispatch(setGlobalErrorAC(globalError))

    setTimeout(() => {
        dispatch(setGlobalErrorAC(null))
    }, 1000)
}

// types
type InitialStateType = typeof initialState;
export type AppActionTypes =
    ReturnType<typeof initializedSuccessAC>
    | ReturnType<typeof setGlobalErrorAC>