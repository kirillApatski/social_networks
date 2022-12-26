import React from 'react';
import {UiWrapper, Wrapper} from "../../styles/Wrapper";
import {TextStyled} from "../../components/Text/TextStyled";
import Input from "../../components/Input/Input";
import {Button} from "../../components/Button/Button";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {updateUserProfile} from "../../../bll/redax/profileReducer";

export const Settings = () => {
    const dispatch = useAppDispatch()
    const profile = useAppSelector(state => state.profilePages.profile)
    const {
        handleChange,
        handleSubmit,
        values,
        setFieldValue
    } = useFormik({
        initialValues: {...profile.contacts, ...profile},
        validationSchema: Yup.object({
            fullName: Yup.string()
                .min(3, "Must be more than 2")
                .max(50, "Must be less than 50")
                .required('Required')
            ,
        }),
        onSubmit: (values) => {
            const validProfile = {
                aboutMe: "Just me",
                lookingForAJob: values.lookingForAJob,
                lookingForAJobDescription: values.lookingForAJobDescription,
                fullName: values.fullName,
                userId: values.userId,
                contacts: {
                    facebook: values.facebook,
                    website: values.website,
                    vk: values.vk,
                    twitter: values.twitter,
                    instagram: values.instagram,
                    youtube: values.youtube,
                    github: values.github,
                    mainLink: values.mainLink,
                },
            }
            dispatch(updateUserProfile(validProfile))
        }
    });
    return (
        <UiWrapper width={"100%"} flexDirection={"column"}>
            <TextStyled>Settings profile</TextStyled>
            <Wrapper flexDirection={"column"}>
                <form onSubmit={handleSubmit}>
                    <UiWrapper flexDirection={"column"} alignItems={"center"}>
                        <TextStyled>Full Name</TextStyled>
                        <Input
                            type={"text"}
                            value={values.fullName}
                            name={"fullName"}
                            onChange={handleChange}
                        />
                        <TextStyled>looking For A Job Description</TextStyled>
                        <Input
                            type={"text"}
                            value={values.lookingForAJobDescription}
                            name={"lookingForAJobDescription"}
                            onChange={handleChange}
                        />
                        <TextStyled>lookingForAJob</TextStyled>
                        <Input
                            type={"checkbox"}
                            checked={values.lookingForAJob}
                            name={"checkbox"}
                            onChange={(event) => setFieldValue("lookingForAJob", event.target.checked)}
                        />
                    </UiWrapper>
                    <TextStyled>GitHub</TextStyled>
                    <Input
                        type={"text"}
                        value={values.github}
                        name={"github"}
                        onChange={handleChange}
                    />
                    <TextStyled>Facebook</TextStyled>
                    <Input
                        type={"text"}
                        value={values.facebook}
                        name={"facebook"}
                        onChange={handleChange}
                    />
                    <TextStyled>Twitter</TextStyled>
                    <Input
                        type={"text"}
                        value={values.twitter}
                        name={"twitter"}
                        onChange={handleChange}
                    />
                    <TextStyled>Youtube</TextStyled>
                    <Input
                        type={"text"}
                        value={values.youtube}
                        name={"youtube"}

                        onChange={handleChange}
                    />

                    <TextStyled>Vk</TextStyled>
                    <Input
                        type={"text"}
                        value={values.vk}
                        name={"vk"}
                        onChange={handleChange}
                    />
                    <TextStyled>Instagram</TextStyled>
                    <Input
                        type={"text"}
                        value={values.instagram}
                        name={"instagram"}

                        onChange={handleChange}
                    />
                    <TextStyled>Website</TextStyled>
                    <Input
                        type={"text"}
                        value={values.website}
                        name={"website"}
                        onChange={handleChange}
                    />
                    <TextStyled>Main link</TextStyled>
                    <Input
                        type={"text"}
                        value={values.mainLink}
                        name={"mainLink"}
                        onChange={handleChange}
                    />

                    <Button type={"submit"} label={"Save"}>Save</Button>
                </form>
            </Wrapper>
        </UiWrapper>
    );
};

