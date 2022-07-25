import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPagesType} from "../redax/state";



type DialogsPropsType = {
    dialogsPages: DialogsPagesType
}
export const Dialogs = (props: DialogsPropsType) => {

    const  newMessage: any = React.createRef();

    const addMessage = () => {
        let message = newMessage.current.value
        alert(message)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem  dialogs={props.dialogsPages.dialogs}/>
            </div>
            <div className={s.messages}>
                <Message messages={props.dialogsPages.messages}/>
                <div>
                    <textarea ref={newMessage}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>
        </div>
    )
}