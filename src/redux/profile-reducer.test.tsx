import React from 'react'
import profileReducer, {addPostActionCreator, deletePostActionCreator, PostType, ProfileType} from "./profile-reducer";

const startState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCounts: 15},
        {id: 2, message: 'It\'s my first post', likeCounts: 8},
        {id: 3, message: 'How is your day buddy?', likeCounts: 5},
        {id: 4, message: 'Good luck!', likeCounts: 35},
        {id: 5, message: 'Good luck!', likeCounts: 8},
        {id: 6, message: 'Good luck!', likeCounts: 8},
    ] as Array<PostType>,
    newPostText: "",
    profile: {} as ProfileType,
    status: ""
}

test('length of posts should be incremented', () => {
    const action = addPostActionCreator('IT-Incubator');
    const newState = profileReducer(startState, action)

    expect(newState.posts.length).toBe(7)
})

test('message of the new posts should be correct', () => {
    const action = addPostActionCreator('IT-Incubator');
    const newState = profileReducer(startState, action)

    expect(newState.posts[6].message).toBe('IT-Incubator')
})

test('after deleting length of posts should be decremented', () => {
    const action = deletePostActionCreator(1);
    const newState = profileReducer(startState, action)

    expect(newState.posts.length).toBe(5)
})