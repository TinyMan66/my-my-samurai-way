import React from 'react';
import {Dialogs} from "../Dialogs";
import {StoreType} from "../../../redux/store";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../../redux/dialogs-reducer";

type DialogsContainerPropsType = {
    store: StoreType
}

export const DialogsContainer = (props: DialogsContainerPropsType) => {

    const state = props.store.getState().dialogPage;

    const onSendMassageClickHandler = () => {
        props.store.dispatch(sendMessageActionCreator())
    }
    const onNewMassageChangeHandler = (body: string) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body));
    }

    return (
        <Dialogs
            dialogPage={state}

            sendMessage={onSendMassageClickHandler}
            updateNewMessageBody={onNewMassageChangeHandler}
        />
    )
}