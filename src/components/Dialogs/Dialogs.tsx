import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";




export const Dialogs = () => {
    let dialogs = [
        {id: 1, name: "kirill"},
        {id: 2, name: "Sweta"},
        {id: 3, name: "Dima"},
        {id: 4, name: "Nik"},
        {id: 5, name: "Kate"},
        {id: 6, name: "Max"}
    ];
    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem dialogs={dialogs}/>
            </div>
            <div className={s.messages}>
                <Message messages={messages}/>
            </div>
        </div>
    )
}