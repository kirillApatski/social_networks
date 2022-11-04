import React from 'react';
import s from "./ProfileInfo.module.css";
import {ProfileUserType} from "../../../redax/profileReducer";
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

            <div className={s.description}>
                <img src={props.profile.photos.large} alt="images/text"/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    );
};

