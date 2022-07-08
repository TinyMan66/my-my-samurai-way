import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {

    type PostsPropsType = {
        id: number
        message: string
        likeCount: number
    }
    let posts = [
        { id: 1, message: 'Hi, how are you?', likeCounts: 15},
        { id: 2, message: 'It\'s my first post',  likeCounts: 8},
        // { id: 3, message: 'How is your day buddy?'},
        // { id: 4, message: 'Good luck!'},
        // { id: 5, message: 'Good luck!'},
        // { id: 6, message: 'Good luck!'},
    ]

    let postsElements = posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>);

    return(
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
        )
}

