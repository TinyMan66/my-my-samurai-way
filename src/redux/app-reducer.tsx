import React from "react";
import {getAuthUserDataTC} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

const initialState = {
    initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: AppActionCreatorTypes): InitialStateType => {
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
export const initializeAppTC = () => (dispatch: any) => {
    dispatch(getAuthUserDataTC())
        .then(() => {
            dispatch(initializedSuccessAC())
    })
}

// types
type InitialStateType = typeof initialState;
type AppActionCreatorTypes = ReturnType<typeof initializedSuccessAC>;