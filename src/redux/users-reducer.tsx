import React from 'react'
import {ResultCodesEnum, usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {AppThunk} from "./store";


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as number[]
}

const usersReducer = (state: initialStateType = initialState, action: UsersActionTypes): initialStateType => {
    switch (action.type) {
        case 'users/FOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)
            }
        case 'users/UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)
            }
        case 'users/SET-USERS':
            return {...state, users: action.user}
        case 'users/SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'users/SET-USERS-TOTAL-COUNT':
            return {...state, totalUsersCount: action.totalUsersCount}
        case 'users/TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'users/TOGGLE-IS-FOLLOWING-IN-PROGRESS':
            return {
                ...state,
                followingInProgress: action.inProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}
export default usersReducer

// actions
export const followSuccess = (id: number) => (
    {type: 'users/FOLLOW', userID: id} as const);

export const unfollowSuccess = (id: number) => (
    {type: 'users/UNFOLLOW', userID: id} as const);

export const setUsers = (user: Array<UserType>) => (
    {type: 'users/SET-USERS', user} as const);

export const setCurrentPage = (currentPage: number) => (
    {type: 'users/SET-CURRENT-PAGE', currentPage} as const);

export const setUsersTotalCount = (totalUsersCount: number) => (
    {type: 'users/SET-USERS-TOTAL-COUNT', totalUsersCount} as const);

export const toggleIsFetching = (isFetching: boolean) => (
    {type: 'users/TOGGLE-IS-FETCHING', isFetching} as const);

export const toggleFollowingProgress = (inProgress: boolean, userId: number) => (
    {type: 'users/TOGGLE-IS-FOLLOWING-IN-PROGRESS', inProgress, userId} as const);

// methods
const _followUnfollowFlow = async (dispatch: DispatchType, userId: number, actionCreator: (userId: number) => UnfollowSuccessType | FollowSuccessType, apiMethod: any) => {
    dispatch(toggleFollowingProgress(true, userId))

    const response = await apiMethod(userId);
    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId))
}

// thunks
export const requestUsers = (page: number, pageSize: number): AppThunk => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        const data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items))
        dispatch(setUsersTotalCount(data.totalCount));
    }
}
export const follow = (userId: number): AppThunk => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, followSuccess, usersAPI.follow.bind(usersAPI))
    }
}
export const unfollow = (userId: number): AppThunk => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, unfollowSuccess, usersAPI.unfollow.bind(usersAPI))
    }
}

// types
export type UsersActionTypes =
    UnfollowSuccessType
    | FollowSuccessType
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

export type UnfollowSuccessType = ReturnType<typeof unfollowSuccess>
export type FollowSuccessType = ReturnType<typeof followSuccess>
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
export type initialStateType = typeof initialState;
type DispatchType = Dispatch<UsersActionTypes>;