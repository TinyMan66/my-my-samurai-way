import {DialogPageType} from "./state";

export type DialogsActionCreatorTypes = ReturnType<typeof updateNewMessageBodyActionCreator> | ReturnType<typeof sendMessageActionCreator>


export const updateNewMessageBodyActionCreator = (body: string) => (
    {type: 'UPDATE-NEW-MESSAGE-BODY', body: body} as const);

export const sendMessageActionCreator = () => (
    {type: 'SEND-MESSAGE' } as const);


const dialogsReducer = (state: DialogPageType, action: DialogsActionCreatorTypes):DialogPageType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body;
            return state;
        case 'SEND-MESSAGE':
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id:6, message: body});
            return state;
        default:
            return state;
    }
}
export default dialogsReducer;