import React from 'react'
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

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

const profileReducer = (state: initialStateType = initialState, action: ProfileActionCreatorTypes): initialStateType => {
    switch (action.type) {
        case 'ADD-POST':
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
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'SET-STATUS':
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}
export default profileReducer;

// actions
export const addPostActionCreator = (newPostText: string) => (
    {type: 'ADD-POST', newPostText} as const);

export const setUserProfile = (profile: ProfileType) => (
    {type: 'SET-USER-PROFILE', profile} as const);

export const setStatus = (status: string) => (
    {type: 'SET-STATUS', status} as const);

// thunks
export const getUserProfile = (userId: number) => {
    return (dispatch: Dispatch<ProfileActionCreatorTypes>) => {
        usersAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            });
    }
}

export const getStatus = (userId: number) => {
    return (dispatch: Dispatch<ProfileActionCreatorTypes>) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            });
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: Dispatch<ProfileActionCreatorTypes>) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            });
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
export type ProfileActionCreatorTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
