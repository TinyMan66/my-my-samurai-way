import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: number
    name: string
    avatar: string

}
// let path = "/dialogs/" + props.id не работает

export const DialogItem = (props: DialogItemType) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={"/dialogs/" + props.id}>
                <img src={props.avatar}/> {props.name}
            </NavLink>
        </div>
    )
}
