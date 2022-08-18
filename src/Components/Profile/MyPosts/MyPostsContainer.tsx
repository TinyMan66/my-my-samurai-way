import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";


// type MyPostsContainerPropsType = {
//     store: StoreType
// }

export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    const onAddPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    const onPostChange = (newText: string) => {
                        let action = updateNewPostTextActionCreator(newText);
                        store.dispatch(action);
                    }

                    return <MyPosts
                        myPosts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}

                        addPost={onAddPost}
                        updateNewPostText={onPostChange}
                    />
                }
            }
        </StoreContext.Consumer>
    )

}

