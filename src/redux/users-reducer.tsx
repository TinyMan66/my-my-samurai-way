import React from 'react'

export type UsersActionCreatorTypes =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUsersTotalCountAC>

export const followAC = (id: number) => (
    {type: 'FOLLOW', userID: id} as const);

export const unfollowAC = (id: number) => (
    {type: 'UNFOLLOW', userID: id} as const);

export const setUsersAC = (user: Array<UserType>) => (
    {type: 'SET-USERS', user} as const);

export const setCurrentPageAC = (currentPage: number) => (
    {type: 'SET-CURRENT-PAGE', currentPage} as const);

export const setUsersTotalCountAC = (totalUsersCount: number) => (
    {type: 'SET-USERS-TOTAL-COUNT', totalUsersCount} as const);


export type UserType = {
    id: number
    // avatar: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
    name: string
    status: string
    location: {
        city: string,
        country: string
    }
    // totalCount: number
}

// export type NewPostTextType = string;

export type initialStateType = typeof initialState;

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 3
}

const usersReducer = (state: initialStateType = initialState, action: UsersActionCreatorTypes): initialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)
            }
        case 'SET-USERS':
            return {
                ...state,
                users: action.user
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SET-USERS-TOTAL-COUNT':
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        default:
            return state;
    }
}
export default usersReducer;