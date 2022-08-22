import React from 'react'

export type UsersActionCreatorTypes =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

export const followAC = (id: number) => (
    {type: 'FOLLOW', userID: id} as const);

export const unfollowAC = (id: number) => (
    {type: 'UNFOLLOW', userID: id} as const);

export const setUsersAC = (user: Array<UserType>) => (
    {type: 'SET-USERS', user} as const);

export type UserType = {
    id: number
    avatar: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string,
        country: string
    }
}

// export type NewPostTextType = string;

export type initialStateType = typeof initialState;

let initialState = {
    // users: [
    //     {
    //         id: 1,
    //         avatar: 'https://online.pubhtml5.com/ipnc/accountlogo.jpg',
    //         followed: false,
    //         fullName: 'Eliza',
    //         status: 'I\'m not fine',
    //         location: {city: 'Moscow', country: 'Russia'}
    //     },
    //     {
    //         id: 2,
    //         avatar: 'https://www.pngkit.com/png/detail/563-5631413_donnie-thornberry.png',
    //         followed: true,
    //         fullName: 'Donnie',
    //         status: 'Looking for a job..',
    //         location: {city: 'Vancouver', country: 'Canada'}
    //     },
    //     {
    //         id: 3,
    //         avatar: 'https://static.life.ru/posts/2018/08/1145040/108af72f8b30a38d26c2b21678759672.jpg',
    //         followed: true,
    //         fullName: 'Nigel',
    //         status: 'I am a boss',
    //         location: {city: 'Portland', country: 'USA'}
    //     },
    // ] as Array<UserType>
    users: [] as Array<UserType>
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
                users: [...state.users, ...action.user]
            }
        default:
            return state;
    }
}
export default usersReducer;