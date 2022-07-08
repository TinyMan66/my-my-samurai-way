import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}
// let path = "/dialogs/" + props.id не работает

const DialogItem = (props: DialogItemType) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

type MessageType = {
    message: string
}
const Message = (props: MessageType) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = () => {

    type DialogsPropsType = {
        id: number
        name: string
    }
    let dialogs = [
        { id: 1, name: 'Eliza'},
        { id: 2, name: 'Donnie'},
        { id: 3, name: 'Nigel'},
        { id: 4, name: 'Darwin'},
        { id: 5, name: 'Marianne'},
        { id: 6, name: 'Debbie'},
    ]

    type MessagePropsType = {
        id: number
        message: string
    }
    let messages = [
        { id: 1, message: 'Hi'},
        { id: 2, message: 'What\'s wrong with you??'},
        { id: 3, message: 'How is your day buddy?'},
        { id: 4, message: 'Good luck!'},
        { id: 5, message: 'Good luck!'},
        { id: 6, message: 'Good luck!'},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let massagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {massagesElements}
            </div>
        </div>
    )
}