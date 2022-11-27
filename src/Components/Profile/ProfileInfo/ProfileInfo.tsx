import React from "react";
import s from './ProfileInfo.module.css'
import {ProfilePropsType} from "../Profile";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusHook";

export const ProfileInfo = ({profile, status, updateStatus}: ProfilePropsType) => {
    if (!profile) {
        return <Preloader/>
    }

    return <>
        {profile
            ? (<div>
                    <div className={s.descriptionBlock}>
                        <img src={profile.photos.large} alt={"profile photo "}/>
                        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                    </div>
                </div>
            )
            : (<Preloader/>
            )
        }
    </>
}
