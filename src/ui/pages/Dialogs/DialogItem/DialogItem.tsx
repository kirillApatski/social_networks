import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsType} from "../../../../bll/redax/dialogsReducer";
import {UiWrapper} from "../../../styles/Wrapper";

type DialogsItemsPropsType = {
    dialogs: DialogsType[]
}


export const DialogItem = (props: DialogsItemsPropsType) => {

    let dialogsItem = props.dialogs.map(dialog => {
        return <UiWrapper key={dialog.id}><NavLink style={isActive => isActive ? {color: "red"} : {}} to={`/dialogs/${dialog.id}`}>{dialog.name}</NavLink></UiWrapper>
    })

    return (
        <>
            {dialogsItem}
        </>
    )
}