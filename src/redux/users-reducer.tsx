import React from 'react'

export type UsersActionCreatorTypes =
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

export const follow = (id: number) => (
    {type: 'FOLLOW', userID: id} as const);

export const unfollow = (id: number) => (
    {type: 'UNFOLLOW', userID: id} as const);

export const setUsers = (user: Array<UserType>) => (
    {type: 'SET-USERS', user} as const);

export const setCurrentPage = (currentPage: number) => (
    {type: 'SET-CURRENT-PAGE', currentPage} as const);

export const setUsersTotalCount = (totalUsersCount: number) => (
    {type: 'SET-USERS-TOTAL-COUNT', totalUsersCount} as const);

export const toggleIsFetching = (isFetching: boolean) => (
    {type: 'TOGGLE-IS-FETCHING', isFetching} as const);

export const toggleFollowingProgress = (inProgress: boolean) => (
    {type: 'TOGGLE-IS-FOLLOWING-IN-PROGRESS', inProgress} as const);


export type UserType = {
    id: number
    photos: {
        small: string
        large: string
    }
    followed: boolean
    name: string
    status: string
    location: {
        city: string
        country: string
    }
}

// export type NewPostTextType = string;

export type initialStateType = typeof initialState;

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false
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
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
            case 'TOGGLE-IS-FOLLOWING-IN-PROGRESS':
            return {
                ...state,
                followingInProgress: action.inProgress
            }
        default:
            return state;
    }
}
export default usersReducer;