import React from 'react'
import {profileAPI, ResultCodesEnum, usersAPI} from "../api/api";
import {AppThunk} from "./store";

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCounts: 15},
        {id: 2, message: 'It\'s my first post', likeCounts: 8},
        {id: 3, message: 'How is your day buddy?', likeCounts: 5},
        {id: 4, message: 'Good luck!', likeCounts: 35},
        {id: 5, message: 'Good luck!', likeCounts: 8},
        {id: 6, message: 'Good luck!', likeCounts: 8},
    ] as Array<PostType>,
    newPostText: "",
    profile: {
        //NaN and 0 - are not good, it must be null, but typeScript against it now - must be resolve!!!
        userId: 0,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        photos: {
            small: '',
            large: ''
        }
    },
    status: ""
}

const profileReducer = (state: initialStateType = initialState, action: ProfileActionTypes): initialStateType => {
    switch (action.type) {
        case 'profile/ADD-POST':
            let newPost = {
                id: new Date().getTime(),
                message: action.newPostText,
                likeCounts: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case 'profile/SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'profile/SET-STATUS':
            return {
                ...state,
                status: action.status
            }
        case 'profile/DELETE-POST':
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        default:
            return state;
    }
}
export default profileReducer;

// actions
export const addPostActionCreator = (newPostText: string) => (
    {type: 'profile/ADD-POST', newPostText} as const);

export const setUserProfile = (profile: ProfileType) => (
    {type: 'profile/SET-USER-PROFILE', profile} as const);

export const setStatus = (status: string) => (
    {type: 'profile/SET-STATUS', status} as const);

export const deletePostActionCreator = (postId: number) => (
    {type: 'profile/DELETE-POST', postId} as const);


// thunks
export const getUserProfile = (userId: number): AppThunk => {
    return async (dispatch) => {
        const data = await usersAPI.getUserProfile(userId);
        dispatch(setUserProfile(data));
    }
}

export const getStatus = (userId: number): AppThunk => {
    return async (dispatch) => {
        const response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
    }
}

export const updateStatus = (status: string): AppThunk => {
    return async (dispatch) => {
        const response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === ResultCodesEnum.Success) {
            dispatch(setStatus(status))
        }
    }
}

// types
export type initialStateType = typeof initialState;
export type PostType = {
    id: number
    message: string
    likeCounts: number
};
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: {
        small: string
        large: string
    }
};
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
};
export type ProfileActionTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePostActionCreator>
