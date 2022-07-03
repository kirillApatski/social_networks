import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


type DialogsItemsPropsType = {
    name: string
    id: string
}
const DialogItems = (props: DialogsItemsPropsType) => {
    return (
        <div className={s.dialogItem}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}
type MessagesItemPropsType = {
    message: string
}
const MessagesItem = (props: MessagesItemPropsType) => {
    return <div className={s.message}>{props.message}</div>
}
export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItems name="Kirill" id="1"/>
                <DialogItems name="Sweta" id="2"/>
                <DialogItems name="Dima" id="3"/>
                <DialogItems name="Nik" id="4"/>
                <DialogItems name="Kate" id="5"/>
                <DialogItems name="Max" id="6"/>

            </div>
            <div className={s.messages}>
                <MessagesItem message="Hi"/>
                <MessagesItem message="How are you"/>
                <MessagesItem message="Yo"/>
                <MessagesItem message="Yo"/>
                <MessagesItem message="Yo"/>
            </div>
        </div>
    )
}