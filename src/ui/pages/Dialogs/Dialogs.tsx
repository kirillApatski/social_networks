import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLength10, requiredFiled} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/Textarea";
import {sendMessageBodyCreator} from "../../../bll/redax/dialogsReducer";
import {Button} from "../../components/Button/Button";
import {UiWrapper} from "../../styles/Wrapper";
import {useAppDispatch} from "../../../hooks/hooks";
import {useFormik} from "formik";



export const Dialogs = () => {
    const dispatch = useAppDispatch()

    const addNewMessage = (value: FromDataType) => {
        dispatch(sendMessageBodyCreator(value.newMessageBody))
    }
    return (
        <UiWrapper width={"100%"}>
            <UiWrapper flexDirection={"column"}>
                <DialogItem/>
            </UiWrapper>
            <UiWrapper flexDirection={"column"} width={"100%"}>
                <Message/>

                <AddMessageForm onSubmit={addNewMessage}/>
            </UiWrapper>
        </UiWrapper>
    )
}


type FromDataType = {
    newMessageBody: string
}

type AddMessageFormPropsType = {
    onSubmit: (data: FromDataType) => void
}

const AddMessageForm = (props: AddMessageFormPropsType) => {

    const { handleBlur, handleSubmit, touched, handleChange, isValid, values, errors } = useFormik({
        initialValues: {
            message: ""
        },

        onSubmit: (values) => {
                console.log(values)
        },
    });

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" name="message"/>
                <Textarea placeholder={'Enter your message'} name={'newMessageBody'}/>
            </div>
            <div>
                <Button label={'Send message'}>Send message</Button>
            </div>
        </form>
    )
}