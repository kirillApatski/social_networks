import React, {useRef} from 'react';
import {getPhoto, ProfileUserType} from "../../../../bll/redax/profileReducer";
import {Preloader} from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {AvatarStyled} from "../../../components/Avatar/AvatarStyled";
import {UiWrapper, Wrapper} from "../../../styles/Wrapper";
import {TextStyled} from "../../../components/Text/TextStyled";
import {Button} from "../../../components/Button/Button";
import {useDispatch} from "react-redux";

type ProfileInfoType = {
    profile: ProfileUserType | null
    status: string
    updateStatus: (status: string) => void
    getPhoto: (photo: any) => void
}

export const ProfileInfo = (props: ProfileInfoType) => {

    const dispatch = useDispatch()
    const inputFile = useRef<HTMLInputElement | null>(null);
    const onClickHandler = () => {
        inputFile.current?.click();
    };

    const uploadPhotosHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        let file = event.target.files && event.target.files[0];
        dispatch(getPhoto(file))
    }

    if (!props.profile) return <Preloader/>
    return (

        <UiWrapper alignItems={"center"} flexWrap={"wrap"} justifyContent={"space-around"}>
            <Wrapper flexDirection={"column"}>
                <AvatarStyled
                    size={"large"}
                    src={props.profile.photos?.large ? props.profile.photos.large : "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=170667a&w=0&h=Ct4e1kIOdCOrEgvsQg4A1qeuQv944pPFORUQcaGw4oI="}
                    alt="images/text"/>
                <input
                    accept=".png, .jpg, .jpeg, .gif"
                    type="file"
                    ref={inputFile}
                    onChange={uploadPhotosHandler}
                    style={{display: "none"}}
                />
                <Button label={"Upload photos"} onClick={onClickHandler}>Upload photos</Button>
            </Wrapper>
            <UiWrapper>
                <Wrapper flexDirection={"column"}>
                    <TextStyled>{props.profile.fullName}</TextStyled>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    <TextStyled>About me: {props.profile.aboutMe}</TextStyled>
                    <TextStyled>Looking for a job: {props.profile.lookingForAJob ? "Yes" : "No"}</TextStyled>
                </Wrapper>
            </UiWrapper>
        </UiWrapper>
    );
};

