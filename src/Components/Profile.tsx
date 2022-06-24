import React from "react";
import s from './Profile.module.css'

export const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://catherineasquithgallery.com/uploads/posts/2021-02/1612791335_1-p-goluboi-les-fon-2.jpg'/>
        </div>
        <div>
            ava + description
        </div>
        <div>
            My Posts
            <div>
                New post
            </div>
            <div className={s.post}>
                <div className={s.item} >
                    post 1
                </div>
                <div className={s.item}>
                    post2
                </div>
            </div>
        </div>
    </div>
}

