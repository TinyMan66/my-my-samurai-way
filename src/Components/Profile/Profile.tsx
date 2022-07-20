import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePageState: ProfilePageType
    updateNewPostText: (newText: string) => void
    addPostCallback: () => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                myPosts={props.profilePageState.posts}
                addPostCallback={props.addPostCallback}
                updateNewPostText={props.updateNewPostText}
                newPostText={props.profilePageState.newPostText}
            />
        </div>
    )
}
