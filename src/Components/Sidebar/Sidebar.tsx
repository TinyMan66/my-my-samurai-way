import React from 'react';
import s from './Sidebar.module.css';
import {SidebarType} from "../../redux/store";
import {NavLink} from "react-router-dom";

type SidebarPropsType = {
    state: SidebarType
}

export const Sidebar = (props: SidebarPropsType) => {
    let sidebarElement = props.state.friends.map(f => <div> <img src={f.avatar} alt={'avatar picture'}/> {f.name} </div>);

    return (
        <div className={s.friends}>
            <NavLink to={"/sidebar/"}> Friends {sidebarElement}
            </NavLink>
        </div>
    );
};

// <img src={}/>