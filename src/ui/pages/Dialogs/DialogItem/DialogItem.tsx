import {NavLink} from "react-router-dom";
import React from "react";
import {LinkStyled} from "../../../layout/Navigation/LinkStyled";
import {useAppSelector} from "../../../../hooks/hooks";

export const DialogItem = () => {
    const dialogs = useAppSelector(state => state.dialogsPages.dialogs)
    let dialogsItem = dialogs.map(dialog => {
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