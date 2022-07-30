import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePageState: ProfilePageType
    dispatch: (action: ActionTypes) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                myPosts={props.profilePageState.posts}
                newPostText={props.profilePageState.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}
