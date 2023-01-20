import React from 'react'

const initialState = {
    dialogs: [
        {id: 1, name: 'Eliza', avatar: 'https://online.pubhtml5.com/ipnc/accountlogo.jpg'},
        {id: 2, name: 'Donnie', avatar: 'https://www.pngkit.com/png/detail/563-5631413_donnie-thornberry.png'},
        {id: 3, name: 'Nigel', avatar: 'https://static.life.ru/posts/2018/08/1145040/108af72f8b30a38d26c2b21678759672.jpg'},
        {id: 4, name: 'Darwin', avatar: 'https://i.pinimg.com/originals/66/20/ed/6620ede81fa149c03873b00f04cddeff.png'},
        {id: 5, name: 'Marianne', avatar: 'https://m.media-amazon.com/images/M/MV5BZDM5OWE2ODYtNDFkOS00NGQ2LWJjZDMtMWUzM2JlYzI4ODQ2XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_FMjpg_UX1000_.jpg'},
        {id: 6, name: 'Debbie', avatar: 'https://i.pinimg.com/originals/92/62/74/9262747b5bdd21bc739cd687c74a29af.png'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'What\'s wrong with you??'},
        {id: 3, message: 'How is your day buddy?'},
        {id: 4, message: 'Good luck!'},
        {id: 5, message: 'Good luck!'},
        {id: 6, message: 'Good luck!'},
    ] as Array<MessageType>,
    newMessageBody: ""
}

const dialogsReducer = (state: initialStateType = initialState, action: DialogsActionTypes): initialStateType => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            return {...state,
                messages: [...state.messages, {id: (state.messages.slice(-1))[0].id + 1, message: action.newMessageBody}]
            }
        default:
            return state;
    }
}
export default dialogsReducer;

// actions
export const sendMessageActionCreator = (newMessageBody: string) => (
    {type: 'SEND-MESSAGE', newMessageBody } as const);

// types
export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
    avatar: string
}
export type initialStateType = typeof initialState;
export type DialogsActionTypes = ReturnType<typeof sendMessageActionCreator>