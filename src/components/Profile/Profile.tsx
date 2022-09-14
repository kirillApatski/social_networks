import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";



export const Profile = () => {
    return (
        <section>
            <ProfileInfo/>
            <MyPostsContainer/>
        </section>
    )
}