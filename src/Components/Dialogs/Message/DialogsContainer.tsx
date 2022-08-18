import React from 'react';
import {Dialogs} from "../Dialogs";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../../redux/dialogs-reducer";
import StoreContext from "../../../StoreContext";

// type DialogsContainerPropsType = {
//     store: StoreType
// }

export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().dialogPage;

                    const onSendMassageClickHandler = () => {
                        store.dispatch(sendMessageActionCreator())
                    }

                    const onNewMassageChangeHandler = (body: string) => {
                        store.dispatch(updateNewMessageBodyActionCreator(body));
                    }

                    return (
                        <Dialogs
                            dialogPage={state}

                            sendMessage={onSendMassageClickHandler}
                            updateNewMessageBody={onNewMassageChangeHandler}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}