import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogsItemsPropsType = {
    dialogs: DialogItemType[]
}
type DialogItemType = {
    name: string
    id: number
}
export const DialogItem = (props: DialogsItemsPropsType) => {
    let dialogsItem = props.dialogs.map(dialog => {
        return <div className={s.dialogItem} key={dialog.id}><NavLink to={`/dialogs/${dialog.id}`}
                                                      activeClassName={s.active}>{dialog.name}</NavLink></div>
    })
    return (
        <>
            {dialogsItem}
        </>
    )
}