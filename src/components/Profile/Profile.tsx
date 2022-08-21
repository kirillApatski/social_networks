import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePages} from "../redax/store";

type ProfilePropsType = {
    profilePages: ProfilePages
    dispatch: (action: ActionsTypes) => void
}
export const Profile = (props: ProfilePropsType) => {
    return (
        <section>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePages.posts}
                newPostText={props.profilePages.newPostText}
                dispatch={props.dispatch}
            />
        </section>
    )
}