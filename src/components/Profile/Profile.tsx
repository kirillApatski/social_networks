import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePages} from "../redax/state";

type ProfilePropsType = {
    profilePages: ProfilePages
    addPost: (postText: string) => void
    changeNewPostText: (newText: string) => void
}
export const Profile = (props: ProfilePropsType) => {
    return (
        <section>
            <ProfileInfo/>
            <MyPosts posts={props.profilePages.posts} changeNewPostText={props.changeNewPostText}
                     newPostText={props.profilePages.newPostText} addPost={props.addPost}/>
        </section>
    )
}