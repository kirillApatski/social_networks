import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePages} from "../../App";

type ProfilePropsType = {
    profilePages: ProfilePages
}
export const Profile = (props:ProfilePropsType) => {
    return (
        <section>
            <ProfileInfo/>
            <MyPosts posts={props.profilePages.posts}/>
        </section>
    )
}