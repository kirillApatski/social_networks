import React, {FC} from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileUserType} from "../../../bll/redax/profileReducer";
import {Wrapper} from "../../styles/Wrapper";

export type ProfilePropsType = {
    profile: ProfileUserType | null
    status: string
    updateStatus: (status: string) => void
    getPhoto: (photo: any) => void
}

export const Profile: FC<ProfilePropsType> = ({profile, status, updateStatus, getPhoto}) =>{
    return (
        <Wrapper
            flexDirection={"column"}
            width={"100%"}
        >
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} getPhoto={getPhoto} />
            <MyPostsContainer/>
        </Wrapper>
    )
}