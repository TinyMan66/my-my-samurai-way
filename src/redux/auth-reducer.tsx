import React from 'react'

export type AuthActionCreatorTypes = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (userId: number, email: string, login: string) => (
    {type: 'SET-USER-DATA', data: {userId, email, login}} as const);


export type DataAuthType = {
    userId: number
    email: string
    login: string
}

// export type AuthType = {
//     data: Array<DataAuthType>,
//     resultCode: number | null,
//     messages: Array<string>
// }

export type initialStateType = typeof initialState;

let initialState = {
    data: {
        userId: NaN,
        email: "",
        login: ""
    },
    isAuth: false
}

const authReducer = (state: initialStateType = initialState, action: AuthActionCreatorTypes): initialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                data: action.data,
                isAuth: true
            }
        default:
            return state;
    }
}
export default authReducer;