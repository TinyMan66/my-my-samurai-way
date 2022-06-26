import React from "react";
import s from './Post.module.css'

type PostType = {
    message?: string
    likeCounts?: number
}
export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src='https://www.my-sfinks.ru/photo/img/kot-sfinks-s-ochkami-34.jpg'/>
            {props.message}
            <div>
                <span>LIKE </span> {props.likeCounts}
            </div>
        </div>
    )
}

