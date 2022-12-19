import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsType} from "../../../../bll/redax/dialogsReducer";
import {LinkStyled} from "../../../layout/Navigation/LinkStyled";

type DialogsItemsPropsType = {
    dialogs: DialogsType[]
}


export const DialogItem = (props: DialogsItemsPropsType) => {

    let dialogsItem = props.dialogs.map(dialog => {
        return (
                <LinkStyled key={dialog.id}>
                    <NavLink to={`/dialogs/${dialog.id}`}>
                        {dialog.name}
                    </NavLink>
                </LinkStyled>
        )
    })

    return (
        <>
            {dialogsItem}
        </>
    )
}