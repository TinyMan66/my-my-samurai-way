import React from 'react';
import s from './Sidebar.module.css';
import {SidebarType} from "../../redux/state";
import {NavLink} from "react-router-dom";

type SidebarPropsType = {
    state: SidebarType
}

export const Sidebar = (props: SidebarPropsType) => {
    let sidebarElement = props.state.friends.map(f => <div> <img src={f.avatar}/> {f.name} </div>);

    return (
        <div className={s.friends}>
            <NavLink to={"/sidebar/"}> Friends {sidebarElement}
            </NavLink>
        </div>
    );
};

// <img src={}/>