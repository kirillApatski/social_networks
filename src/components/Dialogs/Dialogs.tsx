import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes, DialogsPagesType} from "../redax/store";
import {sendMessageBodyCreator, updateNewMessageBodyCreator} from "../redax/dialogsReducer";


type DialogsPropsType = {
    dialogsPages: DialogsPagesType
    dispatch: (action: ActionsTypes) => void
}
export const Dialogs = (props: DialogsPropsType) => {


    const onSendMessageClick = () => {
      props.dispatch(sendMessageBodyCreator(props.dialogsPages.newMessageBody))
    }
    const onChangeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem dialogs={props.dialogsPages.dialogs}/>
            </div>
            <div className={s.messages}>
                <Message messages={props.dialogsPages.messages}/>
                <div>
                    <textarea value={props.dialogsPages.newMessageBody} onChange={onChangeMessageText}></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>send message</button>
                </div>
            </div>
        </div>
    )
}