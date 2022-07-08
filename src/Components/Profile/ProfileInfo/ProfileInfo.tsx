import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://abc-decor.com/img/gallery/4/thumbs/thumb_l_nus_10425.jpg' alt={'picture forest'}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
