import React, {FC} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength10, requiredFiled} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/Textarea";
import {DialogsPagesType} from "../../../bll/redax/dialogsReducer";
import {Button} from "../../components/Button/Button";


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
                <Button label={'Send message'}>Send message</Button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm<FromDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)