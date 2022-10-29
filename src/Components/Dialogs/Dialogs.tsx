import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./Message/DialogsContainer";
import {AddMassageReduxForm} from "./AddMessageForm/AddMessageForm";

export type FormDataType = {
    newMessageBody: string
}

export const Dialogs = (props: DialogsPropsType) => {

    const state = props.dialogsPage;

    const dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} avatar={d.avatar} name={d.name} id={d.id}/>);

    const massagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>);

    const addNewMassage = (values: FormDataType) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{massagesElements}</div>
            </div>
            <AddMassageReduxForm onSubmit={addNewMassage}/>
        </div>
    )
}

