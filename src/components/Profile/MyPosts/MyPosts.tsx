import s from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    let posts = [
        {id:1, message: "Hi, how are you", likeCount : 15},
        {id:2, message: "It's my first post", likeCount : 20},
    ]
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
            <Post posts={posts}/>
        </div>
    )
}