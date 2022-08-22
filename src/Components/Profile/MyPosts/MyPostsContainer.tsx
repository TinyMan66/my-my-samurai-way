import React from "react";
import {
    addPostActionCreator,
    PostType,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

// export const MyPostsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//                     const onAddPost = () => {
//                         store.dispatch(addPostActionCreator());
//                     }
//
//                     const onPostChange = (newText: string) => {
//                         let action = updateNewPostTextActionCreator(newText);
//                         store.dispatch(action);
//                     }
//
//                     return <MyPosts
//                         myPosts={state.profilePage.posts}
//                         newPostText={state.profilePage.newPostText}
//
//                         addPost={onAddPost}
//                         updateNewPostText={onPostChange}
//                     />
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

type mapStatePropsType = {
    posts: Array<PostType>
    newPostText: string
}

type mapDispatchPropsType = {
    updateNewPostText: (newText: string) => void
    addPost: () => void
}

export type MyPostsPropsType = mapStatePropsType & mapDispatchPropsType;

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        updateNewPostText: (newText) => {
            let action = updateNewPostTextActionCreator(newText);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);