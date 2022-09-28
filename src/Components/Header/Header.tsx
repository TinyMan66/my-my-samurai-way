import React from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    isAuth: boolean
    login: string
}

export const Header = (props: HeaderPropsType) => {
    return <header className={s.header}>
        <img src='https://papik.pro/uploads/posts/2021-09/1631506537_3-papik-pro-p-konturnii-risunok-gori-5.jpg' alt={'wallpaper'}/>

        <div className={s.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={'/login'}>Log in</NavLink>}
        </div>
    </header>
}