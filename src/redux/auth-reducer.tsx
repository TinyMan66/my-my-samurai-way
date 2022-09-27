import React from 'react'

export type UsersActionCreatorTypes =
    ReturnType<typeof setUserData>


export const setUserData = (userId: string, email: string, login: string) => (
    {type: 'SET-USER-DATA', data: {userId, email, login}} as const);


export type AuthType = {
    userId: string
    email: string
    login: string
}

export type initialStateType = typeof initialState;

let initialState = {
    userId: " ",
    email: " ",
    login: " "
}

const authReducer = (state: initialStateType = initialState, action: UsersActionCreatorTypes): initialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}
export default authReducer;