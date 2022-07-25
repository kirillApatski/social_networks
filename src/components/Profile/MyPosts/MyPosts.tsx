import s from "./MyPosts.module.css";
import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {PostsType} from "../../redax/state";


type MyPostsPropsType = {
    posts: PostsType[]
    addPost: (postText: string) => void
    newPostText: string
    changeNewPostText: (newText: string) => void
}
export const MyPosts = (props: MyPostsPropsType) => {

    const addPost = () => {
        props.addPost(props.newPostText)
        props.changeNewPostText("")
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewPostText(e.currentTarget.value)
    }
    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangeHandler} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <Post posts={props.posts}/>
        </div>
    )
}