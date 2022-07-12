import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType} from "../../redux/state";


type DialogsPropsType = {
    state: DialogPageType
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem key={d.id} avatar={d.avatar} name={d.name} id={d.id}/>);

    let massagesElements = props.state.messages.map(m => <Message key={m.id} message={m.message}/>);

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