import s from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";
import {PostsType} from "../../../App";


type MyPostsPropsType = {
    posts: PostsType[]
}
export const MyPosts = (props: MyPostsPropsType) => {
    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <Post posts={props.posts}/>
        </div>
    )
}