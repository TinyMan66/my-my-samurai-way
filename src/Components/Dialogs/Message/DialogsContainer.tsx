import React from 'react';
import {Dialogs} from "../Dialogs";
import {
    initialStateType,
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

// export const DialogsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     const state = store.getState().dialogPage;
//
//                     const onSendMassageClickHandler = () => {
//                         store.dispatch(sendMessageActionCreator())
//                     }
//
//                     const onNewMassageChangeHandler = (body: string) => {
//                         store.dispatch(updateNewMessageBodyActionCreator(body));
//                     }
//
//                     return (
//                         <Dialogs
//                             dialogPage={state}
//
//                             sendMessage={onSendMassageClickHandler}
//                             updateNewMessageBody={onNewMassageChangeHandler}
//                         />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

type mapStatePropsType = {
    dialogsPage: initialStateType
}

type mapDispatchPropsType = {
    updateNewMessageBody: (body: string) => void,
    sendMessage: () => void
}

export type DialogsPropsType = mapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyActionCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);