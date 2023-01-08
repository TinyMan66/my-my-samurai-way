import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css'
import {ProfilePropsType} from "../Profile";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusHook";
import userIcon from "../../../assets/images/user_icon.png";

export const ProfileInfo = ({isOwner, profile, status, updateStatus, savePhoto}: ProfilePropsType) => {
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

        return <>
            {profile
                ? (<div>
                        <div className={s.descriptionBlock}>
                            <img src={profile.photos.large || userIcon} alt={"profile photo "} className={s.mainPhoto}/>
                            {isOwner && <input type="file" accept=".jpg, .jpeg, .png" onChange={onMainPhotoSelected}/>}
                            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                        </div>
                    </div>
                )
                : (<Preloader/>
                )
            }
        </>
    }
