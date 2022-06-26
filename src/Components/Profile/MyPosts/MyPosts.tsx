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
                <Post message={'Hi, how are you?'} likeCounts={15}/>
                <Post message={"It's my first post"} likeCounts={8} />
                <Post/>
            </div>
        </div>
        )
}

