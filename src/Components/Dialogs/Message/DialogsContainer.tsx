import React, {ComponentType} from 'react';
import {Dialogs} from "../Dialogs";
import {
    initialStateType,
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

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

export const DialogsContainer = compose<ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)