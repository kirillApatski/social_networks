import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import * as Yup from "yup"
import {Textarea} from "../../common/FormsControls/Textarea";
import {sendMessageBodyCreator} from "../../../bll/redax/dialogsReducer";
import {Button} from "../../components/Button/Button";
import {UiWrapper} from "../../styles/Wrapper";
import {useAppDispatch} from "../../../hooks/hooks";
import {useFormik} from "formik";



export const Dialogs = () => {
    const dispatch = useAppDispatch()

    const addNewMessageHandle = (value: FromDataType) => {
        dispatch(sendMessageBodyCreator(value.newMessageBody))
    }
    return (
        <UiWrapper width={"100%"}>
            <UiWrapper flexDirection={"column"}>
                <DialogItem/>
            </UiWrapper>
            <UiWrapper flexDirection={"column"} width={"100%"}>
                <Message/>

                <AddMessageForm onSubmit={addNewMessageHandle}/>
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

    const {
        handleChange,
        handleSubmit,
        values,
    } = useFormik({
        initialValues: {
            newMessageBody: "",
        },
        validationSchema: Yup.object({
            newMessageBody: Yup.string()
                .min(3, "Must be more than 2")
                .max(50, "Must be less than 50")
                .required('Required')
        }),
        onSubmit: (values) => {
             props.onSubmit(values)
        }
    });
    return (
        <form onSubmit={handleSubmit}>

            <div>
                <Textarea placeholder={'Enter your message'} name='newMessageBody' onChange={handleChange} value={values.newMessageBody}/>
            </div>
            <div>
                <Button type="submit" label={'Send message'}>Send message</Button>
            </div>
        </form>
    )
}