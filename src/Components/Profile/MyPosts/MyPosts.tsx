import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";

export const MyPosts = (props: MyPostsPropsType) => {
    const postsElements = props.posts.map(p =>
        <Post
            key={p.id}
            id={p.id}
            message={p.message}
            likeCounts={p.likeCounts}
        />);

    const addPostHandler = () => {
        props.addPost();
    }

    const newPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value;
        props.updateNewPostText(newText);
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

