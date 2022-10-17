import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileUserType} from "../../redax/profileReducer";

export type ProfilePropsType = {
    profile: ProfileUserType | null
    status: string
    updateStatus: (status: string) => void
}

export const Profile = (props: ProfilePropsType) =>{
    return (
        <section>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer/>
        </section>
    )
}