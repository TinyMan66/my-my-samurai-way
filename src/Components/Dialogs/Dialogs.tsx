import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./Message/DialogsContainer";

export const Dialogs = (props: DialogsPropsType) => {

    const state = props.dialogsPage;

    const dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} avatar={d.avatar} name={d.name} id={d.id}/>);
    const massagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>);

    let newMessageBody = state.newMessageBody
    const onSendMassageClickHandler = () => {
        props.sendMessage();
    }
    const onNewMassageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{massagesElements}</div>
                <div>
                    <div><textarea
                        value={newMessageBody}
                        onChange={onNewMassageChangeHandler}
                        placeholder='Enter your message'></textarea></div>
                    <div>
                        <button onClick={onSendMassageClickHandler}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}