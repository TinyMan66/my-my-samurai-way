import React, {ChangeEvent, FC, useState} from "react";
import s from './ProfileInfo.module.css'
import {ProfilePropsType} from "../Profile";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusHook";
import userIcon from "../../../assets/images/user_icon.png";
import {ContactsType, ProfileType} from "../../../redux/profile-reducer";
import ProfileDataForm, {ProfileFormDataType} from "./ProfileDataForm";


export const ProfileInfo = ({isOwner, profile, status, updateStatus, savePhoto, saveProfile}: ProfilePropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false);

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData: ProfileFormDataType) => {
        saveProfile(formData as ProfileType).then(() => {
            setEditMode(false)
        })
    }

    if (!profile) {
        return <Preloader/>
    }
    return <>
        {profile
            ? (<div>
                    <div className={s.descriptionBlock}>
                        <img src={profile.photos.large || userIcon} alt={"profile photo "} className={s.mainPhoto}/>
                        {isOwner && <input type="file" accept=".jpg, .jpeg, .png" onChange={onMainPhotoSelected}/>}
                        <div>
                            <b>Status: </b><ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                        </div>

                        {editMode
                            ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile}/>
                            : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>
                        }
                    </div>
                </div>
            )
            : (<Preloader/>
            )
        }
    </>
}

const ProfileData: FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div>
                <button onClick={goToEditMode}>Edit</button>
            </div>}
            <div>
                <b>Full name: </b> {profile.fullName}
            </div>
            <div>
                <b>About me: </b> {profile.aboutMe}
            </div>
            <div>
                <b>Looking for a job: </b> {profile.lookingForAJob ? 'YES' : 'NO'}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My professional skills: </b> {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key}
                                contactValue={profile.contacts[key as keyof ContactsType]}/>
            })}
            </div>
        </div>
    )
}

const Contact: FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}</b> : {contactValue}
        </div>
    )
}

// types
type ContactPropsType = {
    contactTitle: string
    contactValue: string
}
type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}