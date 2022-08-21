import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {StoreType} from "../redax/redux-store";

type ProfilePropsType = {
    store: StoreType
}
export const Profile = (props: ProfilePropsType) => {
    return (
        <section>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
            />
        </section>
    )
}