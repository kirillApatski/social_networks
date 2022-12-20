import React from "react";
import {UiWrapper} from "../../../styles/Wrapper";
import {useAppSelector} from "../../../../hooks/hooks";


export const Message = () => {
    const messages = useAppSelector(state => state.dialogsPages.messages)

    let messageItem = messages.map(message => <UiWrapper width={"fit-content"} key={message.id}>{message.message}</UiWrapper>)
    return (
        <>
            {messageItem}
        </>
    )
}