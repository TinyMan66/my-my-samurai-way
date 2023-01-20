import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

type FormDataType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name="newPostText"
                   placeholder="Post message" validate={[required, maxLength10]}/>
            <button>Add post</button>
        </form>
    )
}
const AddPostReduxForm = reduxForm<FormDataType>({form: 'profileAddPostForm'})(AddNewPostForm)


export const MyPosts = React.memo((props: MyPostsPropsType) => {
    const postsElements = props.posts.map(p =>
        <Post
            key={p.id}
            id={p.id}
            message={p.message}
            likeCounts={p.likeCounts}
        />);

    const addNewPost = (values: FormDataType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            {/*<div>*/}
            {/*    <div><textarea onChange={newPostChangeHandler} value={props.newPostText}/></div>*/}
            {/*    <div>*/}
            {/*        <button onClick={addPostHandler}>Add post</button>*/}
            {/*        <button>Remove</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <AddPostReduxForm onSubmit={addNewPost}/>
            <div className={s.post}>{postsElements}</div>
        </div>
    )
});