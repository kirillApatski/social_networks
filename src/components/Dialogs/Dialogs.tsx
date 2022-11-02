import React, {FC} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPagesType} from "../../redax/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength10, requiredFiled} from "../../utils/validatots/validators";
import {Textarea} from "../common/FormsControls/Textarea";


type DialogsPropsType = {
    onChangeMessageText: (body: string) => void
    onSendMessageClick: (value: string) => void
    dialogsPage: DialogsPagesType
    isAuth: boolean
}
export const Dialogs = (props: DialogsPropsType) => {


    const onSubmit = (value: FromDataType) => {
        console.log(value.newMessageBody)
        props.onSendMessageClick(value.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem dialogs={props.dialogsPage.dialogs}/>
            </div>
            <div className={s.messages}>
                <Message messages={props.dialogsPage.messages}/>

                <AddMessageReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
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
                <button>send message</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm<FromDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)