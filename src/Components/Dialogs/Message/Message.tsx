import React from 'react';
import s from './../Dialogs.module.css';

type MessageType = {
    message: string
}

let newMessage = React.createRef<HTMLTextAreaElement>();
let addMassageHandler = () => {
    let textMassage = newMessage.current?.value;
    alert(textMassage);
}

export const Message = (props: MessageType) => {
    return (
        <div>
            <div className={s.message}>{props.message}</div>
            <div>
                <textarea ref={newMessage}></textarea>
                <button onClick={addMassageHandler}>Add Message</button>
            </div>
        </div>

    )
}
