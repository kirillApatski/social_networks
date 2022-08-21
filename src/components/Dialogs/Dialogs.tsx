import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPagesType} from "../redax/store";


type DialogsPropsType = {
    onChangeMessageText: (body: string) => void
    onSendMessageClick: () => void
    dialogsPage: DialogsPagesType
}
export const Dialogs = (props: DialogsPropsType) => {


    const onSendMessageClick = () => {
      props.onSendMessageClick()
    }
    const onChangeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.onChangeMessageText(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem dialogs={props.dialogsPage.dialogs}/>
            </div>
            <div className={s.messages}>
                <Message messages={props.dialogsPage.messages}/>
                <div>
                    <textarea value={props.dialogsPage.newMessageBody} onChange={onChangeMessageText}></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>send message</button>
                </div>
            </div>
        </div>
    )
}