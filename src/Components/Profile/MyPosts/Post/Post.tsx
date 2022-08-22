import React from "react";
import s from './Post.module.css'

type PostPropsType = {
    id: number
    message: string
    likeCounts: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src='https://www.my-sfinks.ru/photo/img/kot-sfinks-s-ochkami-34.jpg' alt={'avatar'}/>
            {props.message}
            <div>
                <span>LIKE</span> {props.likeCounts}
            </div>
        </div>
    )
}

