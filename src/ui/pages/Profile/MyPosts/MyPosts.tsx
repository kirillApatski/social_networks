import React, {FC} from "react";
import {Post} from "./Post/Post";
import {Textarea} from "../../../common/FormsControls/Textarea";
import {addPostActionCreator} from "../../../../bll/redax/profileReducer";
import {UiWrapper} from "../../../styles/Wrapper";
import {ButtonStyled} from "../../../components/Button/ButtonStyled";
import {TextStyled} from "../../../components/Text/TextStyled";
import {useAppDispatch} from "../../../../hooks/hooks";
import {useFormik} from "formik";
import * as Yup from "yup";


export const MyPosts = () => {
    const dispatch = useAppDispatch()

    const onAddPost = (value: FromDataType) => {
        dispatch(addPostActionCreator(value.newPostText))
    }
    return (
        <UiWrapper
            flexDirection={"column"}
        >
            <TextStyled fontSize={"20px"}>My posts</TextStyled>
            <AddNewPostForm onSubmit={onAddPost}/>
            <Post/>
        </UiWrapper>
    )
}

type FromDataType = {
    newPostText: string
}
type AddNewPostFormType = {
    onSubmit: (data: FromDataType) => void
}

const AddNewPostForm: FC<AddNewPostFormType> = (props) => {
    const {
        handleChange,
        handleSubmit,
        values,
    } = useFormik({
        initialValues: {
            newPostText: "",
        },
        validationSchema: Yup.object({
            newPostText: Yup.string()
                .min(3, "Must be more than 2")
                .max(100, "Must be less than 50")
                .required('Required')
        }),
        onSubmit: (values) => {
            props.onSubmit(values)
        }
    });
    return (
        <form onSubmit={handleSubmit}>
            <Textarea placeholder={'Enter your post'} name='newPostText' onChange={handleChange} value={values.newPostText}/>
            <ButtonStyled type={"submit"}>Add post</ButtonStyled>
        </form>
    )
}