import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    myPosts: Array<PostType>
    addPostCallback: (postMessage: string) => void
}
export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.myPosts.map(p => <Post key={p.id} id={p.id} message={p.message} likeCounts={p.likeCounts} />);

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        if (newPostElement.current) {
            props.addPostCallback(newPostElement.current.value);
            newPostElement.current.value = '';
        }
    }

    return(
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div><textarea ref={newPostElement}></textarea></div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.post}>{postsElements}</div>
        </div>
        )
}

