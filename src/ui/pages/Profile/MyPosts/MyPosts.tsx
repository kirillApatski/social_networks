import React, {FC} from "react";
import {Post} from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength10, requiredFiled} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/Textarea";
import {PostsType} from "../../../../bll/redax/profileReducer";
import {UiWrapper} from "../../../styles/Wrapper";
import {ButtonStyled} from "../../../components/Button/ButtonStyled";
import {TextStyled} from "../../../components/Text/TextStyled";


type MyPostsPropsType = {
    posts: PostsType[]
    addPost: (newPostText: string) => void
}
export const MyPosts = (props: MyPostsPropsType) => {
    const onAddPost = (value: FromDataType) => {
        props.addPost(value.newPostText)
    }
    return (
        <UiWrapper
            flexDirection={"column"}
        >
            <TextStyled fontSize={"20px"}>My posts</TextStyled>
            <AddPostFormRedux onSubmit={onAddPost}/>
            <Post posts={props.posts}/>
        </UiWrapper>
    )
}

type FromDataType = {
    newPostText: string
}

const AddNwePostForm: FC<InjectedFormProps<FromDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'newPostText'} validate={[requiredFiled, maxLength10]}
                   placeholder='Post message'/>
            <ButtonStyled>Add post</ButtonStyled>
        </form>
    )
}

const AddPostFormRedux = reduxForm<FromDataType>({form: 'ProfileAddNewPostForm'})(AddNwePostForm)