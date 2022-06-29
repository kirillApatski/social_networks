import s from "./Post.module.css";
import React from "react";

type PostPropsType = {
    message: string
    likeCount:number
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={s.post}>
            <div className={s.item}>
                <img
                    src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=170667a&w=0&h=Ct4e1kIOdCOrEgvsQg4A1qeuQv944pPFORUQcaGw4oI="
                    alt="avatar"/>
                {props.message}
            </div>
            <div>
                <span>{props.likeCount}</span>
            </div>
        </div>
    )
}