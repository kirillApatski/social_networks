import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileUserType} from "../redax/profileReducer";

export type ProfilePropsType = {
    profile: ProfileUserType | null
}

export const Profile = (props: ProfilePropsType) =>{
    return (
        <section>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer/>
        </section>
    )
}