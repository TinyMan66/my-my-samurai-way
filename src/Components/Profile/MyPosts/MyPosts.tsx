import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    myPosts: Array<PostType>
}
export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.myPosts.map(p => <Post key={p.id} id={p.id} message={p.message} likeCounts={p.likeCounts} />);

    return(
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.post}>{postsElements}</div>
        </div>
        )
}

