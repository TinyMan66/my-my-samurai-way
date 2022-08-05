import React from 'react'
import {ProfilePageType} from "./store";

export type ProfileActionCreatorTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator>

export const addPostActionCreator  = () => (
    {type: 'ADD-POST'} as const);

export const updateNewPostTextActionCreator = (newText: string) => (
    { type: 'UPDATE-NEW-POST-TEXT', newText: newText } as const );

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCounts: 15},
        {id: 2, message: 'It\'s my first post', likeCounts: 8},
        {id: 3, message: 'How is your day buddy?', likeCounts: 5},
        {id: 4, message: 'Good luck!', likeCounts: 35},
        {id: 5, message: 'Good luck!', likeCounts: 8},
        {id: 6, message: 'Good luck!', likeCounts: 8},
    ],
    newPostText: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionCreatorTypes):ProfilePageType => {
    switch (action.type){
        case 'ADD-POST':
            let newPost = {
                id: new Date().getTime(),
                message: state.newPostText,
                likeCounts: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export default profileReducer;