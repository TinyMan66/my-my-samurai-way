import React from "react";
import s from './ProfileInfo.module.css'
import {ProfilePropsType} from "../Profile";
import {Preloader} from "../../common/Preloader/Preloader";

export const ProfileInfo = (props: ProfilePropsType) => {
    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src='https://abc-decor.com/img/gallery/4/thumbs/thumb_l_nus_10425.jpg' alt={'forest'}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt={"profile photo"}/>
                ava + description
            </div>
        </div>
    )
}
