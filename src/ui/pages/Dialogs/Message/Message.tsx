import React from "react";
import {MessagesType} from "../../../../bll/redax/dialogsReducer";
import {UiWrapper} from "../../../styles/Wrapper";

type MessagesItemPropsType = {
    messages: MessagesType[]
}

export const Message = (props: MessagesItemPropsType) => {
    let messageItem = props.messages.map(message => <UiWrapper width={"fit-content"} key={message.id}>{message.message}</UiWrapper>)
    return (
        <>
            {messageItem}
        </>
    )
}