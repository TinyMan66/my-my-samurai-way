import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

// type ProfilePropsType = {
//     store: StoreType
// }

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            {/*<MyPostsContainer store={props.store}/>*/}
            <MyPostsContainer />
        </div>
    )
}
