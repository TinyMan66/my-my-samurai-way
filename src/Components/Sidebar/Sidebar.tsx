import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";


// type SidebarPropsType = {
//     state: SidebarType
// }

export const Sidebar = () => {

    return (
        <div>Sidebar</div>
        // <StoreContext.Consumer>
        //     {
        //         (store) => {
        //             let sidebarElement = store.getState().sidebar.friends.map(f => <div> <img src={f.avatar} alt={'avatar'}/> {f.name} </div>);
        //             return (
        //                 <div className={s.friends}>
        //                     <NavLink to={"/sidebar/"}> Friends {sidebarElement}
        //                     </NavLink>
        //                 </div>
        //             )
        //         }
        //
        // }
        // </StoreContext.Consumer>
    );
};

// <img src={}/>