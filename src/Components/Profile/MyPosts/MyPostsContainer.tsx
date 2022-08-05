import React from "react";
import {StoreType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";


type MyPostsContainerPropsType = {
    store: StoreType
}

export const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    let state = props.store.getState();

    const onAddPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const onPostChange = (newText: string) => {
        let action = updateNewPostTextActionCreator(newText);
        props.store.dispatch(action);
    }

    return (
        <MyPosts
            myPosts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}

            addPost={onAddPost}
            updateNewPostText={onPostChange}
        />
    )

}

