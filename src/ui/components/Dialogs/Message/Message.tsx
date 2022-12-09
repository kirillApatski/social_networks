import React from "react";
import {MessagesType} from "../../../../redax/store";

type MessagesItemPropsType = {
    messages: MessagesType[]
}

export const Message = (props: MessagesItemPropsType) => {
    let messageItem = props.messages.map(message => <div key={message.id}>{message.message}</div>)
    return (
        <>
            {messageItem}
        </>
    )
}