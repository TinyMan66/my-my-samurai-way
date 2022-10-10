import React from 'react'
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type ProfileActionCreatorTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof setUserProfile>

export const addPostActionCreator  = () => (
    {type: 'ADD-POST'} as const);

export const updateNewPostTextActionCreator = (newText: string) => (
    { type: 'UPDATE-NEW-POST-TEXT', newText: newText } as const );

export const setUserProfile = (profile: ProfileType) => (
    { type: 'SET-USER-PROFILE', profile } as const );

export const getUserProfile = (userId: number) => {
    return (dispatch: Dispatch<ProfileActionCreatorTypes>) => {
        usersAPI.getUserProfile(userId)
            .then(data => {dispatch(setUserProfile(data))});
    }
}

export type PostType = {
    id: number
    message: string
    likeCounts: number
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

export type initialStateType = typeof initialState;

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCounts: 15},
        {id: 2, message: 'It\'s my first post', likeCounts: 8},
        {id: 3, message: 'How is your day buddy?', likeCounts: 5},
        {id: 4, message: 'Good luck!', likeCounts: 35},
        {id: 5, message: 'Good luck!', likeCounts: 8},
        {id: 6, message: 'Good luck!', likeCounts: 8},
    ] as Array<PostType>,
    newPostText: "" ,
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
    }
}

const profileReducer = (state: initialStateType = initialState, action: ProfileActionCreatorTypes): initialStateType => {
    switch (action.type){
        case 'ADD-POST':
            let newPost = {
                id: new Date().getTime(),
                message: state.newPostText,
                likeCounts: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}
export default profileReducer;