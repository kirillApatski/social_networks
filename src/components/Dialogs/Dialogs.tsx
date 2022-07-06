import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPagesType} from "../../App";



type DialogsPropsType = {
    dialogsPages: DialogsPagesType
}
export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem  dialogs={props.dialogsPages.dialogs}/>
            </div>
            <div className={s.messages}>
                <Message messages={props.dialogsPages.messages}/>
            </div>
        </div>
    )
}