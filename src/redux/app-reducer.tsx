import React from "react";
import {getAuthUserDataTC} from "./auth-reducer";
import {AppThunk} from "./store";

const INITIALIZED_SUCCESS = 'app/INITIALIZED-SUCCESS';

const initialState = {
    initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: AppActionTypes): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

// actions
export const initializedSuccessAC = () => ({type: INITIALIZED_SUCCESS});

// thunks
export const initializeAppTC = (): AppThunk => async (dispatch) => {
    await dispatch(getAuthUserDataTC())
    dispatch(initializedSuccessAC())
}

// types
type InitialStateType = typeof initialState;
export type AppActionTypes = ReturnType<typeof initializedSuccessAC>;