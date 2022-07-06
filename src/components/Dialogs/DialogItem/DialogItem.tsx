import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsType} from "../../../App";

type DialogsItemsPropsType = {
    dialogs: DialogsType[]
}


export const DialogItem = (props: DialogsItemsPropsType) => {
    let dialogsItem = props.dialogs.map(dialog => {
        return <div className={s.dialogItem} key={dialog.id}><NavLink to={`/dialogs/${dialog.id}`} activeClassName={s.active}>{dialog.name}</NavLink></div>
    })
    return (
        <>
            {dialogsItem}
        </>
    )
}