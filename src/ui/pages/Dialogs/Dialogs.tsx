import React, {FC} from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength10, requiredFiled} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/Textarea";
import {DialogsPagesType} from "../../../bll/redax/dialogsReducer";
import {Button} from "../../components/Button/Button";
import {UiWrapper} from "../../styles/Wrapper";


type DialogsPropsType = {
    onChangeMessageText: (body: string) => void
    onSendMessageClick: (value: string) => void
    dialogsPage: DialogsPagesType
    isAuth: boolean
}
export const Dialogs = (props: DialogsPropsType) => {


    const onSubmit = (value: FromDataType) => {
        props.onSendMessageClick(value.newMessageBody)
    }
    return (
        <UiWrapper width={"100%"}>
            <UiWrapper flexDirection={"column"}>
                <DialogItem dialogs={props.dialogsPage.dialogs}/>
            </UiWrapper>
            <UiWrapper flexDirection={"column"} width={"100%"}>
                <Message messages={props.dialogsPage.messages}/>

                <AddMessageReduxForm onSubmit={onSubmit}/>
            </UiWrapper>
        </UiWrapper>
    )
}

type FromDataType = {
    newMessageBody: string
}

const AddMessageForm: FC<InjectedFormProps<FromDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your message'} name={'newMessageBody'} component={Textarea} validate={[requiredFiled, maxLength10]}/>
            </div>
            <div>
                <Button label={'Send message'}>Send message</Button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm<FromDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)