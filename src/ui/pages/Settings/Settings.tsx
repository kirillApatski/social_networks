import React from 'react';
import {UiWrapper, Wrapper} from "../../styles/Wrapper";
import {TextStyled} from "../../components/Text/TextStyled";
import Input from "../../components/Input/Input";
import {Button} from "../../components/Button/Button";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useAppDispatch} from "../../../hooks/hooks";
import {TActiveProfile, updateUserProfile} from "../../../bll/redax/profileReducer";

export const Settings = () => {
    const dispatch = useAppDispatch()
    const {
        handleChange,
        handleSubmit,
        values,
    } = useFormik({
        initialValues: {
            facebook: "",
            github: "",
            instagram: "",
            mainLink: "",
            twitter: "",
            vk: "",
            website: "",
            youtube: ""
        },
        validationSchema: Yup.object({

        }),
        onSubmit: (values) => {
            console.log(values)
            const validProfile: TActiveProfile = {

                fullName: '',
                lookingForAJob: false,
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
            // dispatch(updateUserProfile(validProfile))
        }
    });
    return (
        <UiWrapper width={"100%"} flexDirection={"column"}>
            <TextStyled>Settings profile</TextStyled>
            <Wrapper flexDirection={"column"}>
                <form onSubmit={handleSubmit}>
                    <UiWrapper>
                        <TextStyled>Full Name</TextStyled>
                        <Input
                            type={"text"}
                            // value={values}
                            name={"github"}
                            onChange={handleChange}
                        />
                        <TextStyled>GitHub</TextStyled>
                        <Input
                            type={"text"}
                            value={values.github}
                            name={"github"}
                            onChange={handleChange}
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

