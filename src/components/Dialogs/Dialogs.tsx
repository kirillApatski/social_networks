import React from "react";
import s from "./Dialogs.module.css"
export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialogItem + ' ' + s.active}>Kirill</div>
                <div className={s.dialogItem}>Sweta</div>
                <div className={s.dialogItem}>Dima</div>
                <div className={s.dialogItem}>Nik</div>
                <div className={s.dialogItem}>Kate</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you</div>
                <div className={s.message}>yo</div>
            </div>
        </div>
    )
}