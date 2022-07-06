import React from "react";

type MessagesItemPropsType = {
    messages: MessagesType[]
}
type MessagesType = {
    id: number
    message: string
}
export const Message = (props: MessagesItemPropsType) => {
    let messageItem = props.messages.map(message => <div key={message.id}>{message.message}</div>)
    return (
        <>
            {messageItem}
        </>
    )
}