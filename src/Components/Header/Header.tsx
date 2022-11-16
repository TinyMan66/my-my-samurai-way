import React from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logoutTC: () => void
}

export const Header = (props: HeaderPropsType) => {
    return <header className={s.header}>
        <img src='https://papik.pro/uploads/posts/2021-09/1631506537_3-papik-pro-p-konturnii-risunok-gori-5.jpg' alt={'wallpaper'}/>

        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} <button onClick={props.logoutTC}>Log out</button></div>
                : <NavLink to={'/login'}>Log in</NavLink>}
        </div>
    </header>
}