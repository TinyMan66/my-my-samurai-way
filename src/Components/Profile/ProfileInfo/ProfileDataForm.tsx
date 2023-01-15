import React from "react";
import {ProfileType} from "../../../redux/profile-reducer";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import s from './ProfileInfo.module.css'
import style from '../../common/FormsControls/FormsControls.module.css'

const ProfileDataForm: React.FC<InjectedFormProps<ProfileFormDataType, ProfileDataFormPropsType> & ProfileDataFormPropsType> = ({
                                                                                                   handleSubmit,
                                                                                                   error,
                                                                                                   profile
                                                                                               }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>Save</button>
            </div>
            { error && <div className={style.formSummaryError}>{error}</div> }
            <div>
                <b>Full name: </b> {createField('Full Name', 'fullName', [], Input)}
            </div>
            <div>
                <b>About me: </b> {createField('About me', 'aboutMe', [], Textarea)}
            </div>
            <div>
                <b>Looking for a job: </b> {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'}, 'Yes')}
            </div>
            <div>
                <b>My professional
                    skills: </b> {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
            </div>
            <div>
                <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b></div>
            })}
            </div>
        </form>
    )
}


const ProfileDataFormReduxForm = reduxForm<ProfileFormDataType, ProfileDataFormPropsType>({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm

// types
export type ProfileFormDataType = {
    fullName: string | null
    aboutMe: string | null
    lookingForAJob: boolean
    lookingForAJobDescription: string
}

type ProfileDataFormPropsType = {
    profile: ProfileType
}
