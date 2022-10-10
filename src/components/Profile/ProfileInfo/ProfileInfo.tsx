import React from 'react';
import s from "./ProfileInfo.module.css";
import {ProfileUserType} from "../../../redax/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoType = {
    profile: ProfileUserType | null
}

export const ProfileInfo = (props: ProfileInfoType) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.profilePicture}>
                <img
                    src="https://yahont-hotel.ru/ckeditor_images/chernomorskoje_vid.jpg"
                    alt="pictures"/>
            </div>
            <div className={s.description}>
                <img src={props.profile.photos.small} alt="images/text"/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    );
};

