import React from "react";
// import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
    return (
        <section>
            <ProfileInfo/>
            <MyPosts/>
        </section>
    )
}