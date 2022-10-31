import s from "./MyPosts.module.css";
import React, {FC} from "react";
import {Post} from "./Post/Post";
import {PostsType} from "../../../redax/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";



type MyPostsPropsType = {
    posts: PostsType[]
    addPost: (newPostText: string) => void
}
export const MyPosts = (props: MyPostsPropsType) => {
    const onAddPost = (value: FromDataType) => {
        props.addPost(value.newPostText)
    }
    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <AddPostFormRedux onSubmit={onAddPost}/>
            </div>
            <Post posts={props.posts}/>
        </div>
    )
}

type FromDataType = {
    newPostText: string
}

const AddNwePostForm: FC<InjectedFormProps<FromDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPostText'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm<FromDataType>({form: 'ProfileAddNewPostForm'})(AddNwePostForm)