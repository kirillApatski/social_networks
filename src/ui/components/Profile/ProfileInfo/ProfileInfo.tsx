import React from 'react';
import s from "./ProfileInfo.module.css";
import {ProfileUserType} from "../../../../redax/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoType = {
    profile: ProfileUserType | null
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>

            {/*<div className={s.description}>*/}
            {/*    <img className={s.profilePicture} src={props.profile.photos.large ? props.profile.photos.large : "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=170667a&w=0&h=Ct4e1kIOdCOrEgvsQg4A1qeuQv944pPFORUQcaGw4oI="} alt="images/text"/>*/}
            {/*    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
            {/*    <div>{props.profile.fullName}</div>*/}
            {/*    <div>{props.profile.aboutMe}</div>*/}
            {/*    <div>{props.profile.lookingForAJobDescription}</div>*/}
            {/*</div>*/}
        </div>
    );
};

