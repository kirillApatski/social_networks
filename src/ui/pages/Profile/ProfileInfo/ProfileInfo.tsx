import React from 'react';
import {ProfileUserType} from "../../../../bll/redax/profileReducer";
import {Preloader} from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {AvatarStyled} from "../../../components/Avatar/AvatarStyled";
import {UiWrapper, Wrapper} from "../../../styles/Wrapper";
import {TextStyled} from "../../../components/Text/TextStyled";

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

        <UiWrapper alignItems={"center"}>
            <AvatarStyled
                size={"large"}
                src={props.profile.photos.large ? props.profile.photos.large : "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=170667a&w=0&h=Ct4e1kIOdCOrEgvsQg4A1qeuQv944pPFORUQcaGw4oI="}
                alt="images/text"/>
            <Wrapper flexDirection={"column"}>
                <TextStyled>{props.profile.fullName}</TextStyled>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <TextStyled>About me: {props.profile.aboutMe}</TextStyled>
                <TextStyled>Looking for a job: {props.profile.lookingForAJobDescription}</TextStyled>
            </Wrapper>
        </UiWrapper>
    );
};

