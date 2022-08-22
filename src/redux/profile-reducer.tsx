import React from 'react'

export type ProfileActionCreatorTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator>

export const addPostActionCreator  = () => (
    {type: 'ADD-POST'} as const);

export const updateNewPostTextActionCreator = (newText: string) => (
    { type: 'UPDATE-NEW-POST-TEXT', newText: newText } as const );

export type PostType = {
    id: number
    message: string
    likeCounts: number
}

// export type NewPostTextType = string;

export type initialStateType = typeof initialState;

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCounts: 15},
        {id: 2, message: 'It\'s my first post', likeCounts: 8},
        {id: 3, message: 'How is your day buddy?', likeCounts: 5},
        {id: 4, message: 'Good luck!', likeCounts: 35},
        {id: 5, message: 'Good luck!', likeCounts: 8},
        {id: 6, message: 'Good luck!', likeCounts: 8},
    ] as Array<PostType>,
    newPostText: '' as string
}

const profileReducer = (state: initialStateType = initialState, action: ProfileActionCreatorTypes): initialStateType => {
    switch (action.type){
        case 'ADD-POST':
            let newPost = {
                id: new Date().getTime(),
                message: state.newPostText,
                likeCounts: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        case 'UPDATE-NEW-POST-TEXT': {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}
export default profileReducer;