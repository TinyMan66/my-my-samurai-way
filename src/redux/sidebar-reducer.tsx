import React from 'react';
import {DialogType} from "./dialogs-reducer";

let initialState = {
    friends: [
        {id: 1, name: 'Eliza', avatar: 'https://online.pubhtml5.com/ipnc/accountlogo.jpg'},
        {id: 2, name: 'Donnie', avatar: 'https://www.pngkit.com/png/detail/563-5631413_donnie-thornberry.png'},
        {
            id: 3,
            name: 'Nigel',
            avatar: 'https://static.life.ru/posts/2018/08/1145040/108af72f8b30a38d26c2b21678759672.jpg'
        },
    ]
};

const sidebarReducer = (state: SidebarType = initialState, action: any) => {
    return state
};

export default sidebarReducer;

// types
export type SidebarType = {
    friends: Array<DialogType>
}