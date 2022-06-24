import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return(
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.post}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
        )
}

