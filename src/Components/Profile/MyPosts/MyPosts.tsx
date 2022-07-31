import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionTypes, addPostActionCreator, updateNewPostTextActionCreator, PostType} from "../../../redux/state";

type MyPostsPropsType = {
    newPostText: string
    myPosts: Array<PostType>
    dispatch: (action: ActionTypes) => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    const postsElements = props.myPosts.map(p =>
        <Post
            key={p.id}
            id={p.id}
            message={p.message}
            likeCounts={p.likeCounts}
        />);

    const addPostHandler = () => {
        props.dispatch(addPostActionCreator());
    }

    const newPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div><textarea onChange={newPostChangeHandler} value={props.newPostText}/></div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.post}>{postsElements}</div>
        </div>
    )
}

