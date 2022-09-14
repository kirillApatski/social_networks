import s from "./MyPosts.module.css";
import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {PostsType} from "../../redax/store";



type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    changeNewText: (text: string) => void
    addPost: (text: string) => void
}
export const MyPosts = (props: MyPostsPropsType) => {
debugger
    const addPost = () => {
        props.addPost(props.newPostText)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.changeNewText(text)
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