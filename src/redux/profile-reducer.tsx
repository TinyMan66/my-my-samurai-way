import React from 'react'
import {ProfilePageType} from "./state";

export type ProfileActionCreatorTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator>

// type ProfileReducerType = {
//     state: ProfilePageType
//     action: ProfileActionCreatorTypes
// }

export const addPostActionCreator  = () => (
    {type: 'ADD-POST'} as const);

export const updateNewPostTextActionCreator = (newText: string) => (
    { type: 'UPDATE-NEW-POST-TEXT', newText: newText } as const );

// const profileReducer: React.FC<ProfileReducerType> = ({state, action})

const profileReducer = (state: ProfilePageType, action: ProfileActionCreatorTypes):ProfilePageType => {
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