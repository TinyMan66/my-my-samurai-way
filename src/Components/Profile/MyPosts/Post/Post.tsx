import React from "react";
import s from './Post.module.css'

export const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://www.my-sfinks.ru/photo/img/kot-sfinks-s-ochkami-34.jpg'/>
            post 1
            <div>
                <span>LIKE</span>
            </div>
        </div>
    )
}

