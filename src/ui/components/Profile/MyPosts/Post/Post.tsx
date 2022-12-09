import s from "./Post.module.css";
import React from "react";
import {PostsType} from "../../../../../redax/store";

type PostPropsType = {
    posts: PostsType[]
}


export const  Post = (props: PostPropsType) => {

    let postItem = props.posts.map(post => {
        return (
            <div className={s.post} key={post.id}>
                <div className={s.item}>
                    <img
                        src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=170667a&w=0&h=Ct4e1kIOdCOrEgvsQg4A1qeuQv944pPFORUQcaGw4oI="
                        alt="avatar"/>
                    {post.message}
                </div>
                <div>
                    <span>{post.likeCount}</span>
                </div>
            </div>
        )
    })

    return (
        <>
            {postItem}
        </>
    )
}