import React from "react";
import {sendMessageBodyCreator, updateNewMessageBodyCreator} from "../redax/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {StoreType} from "../redax/redux-store";


type DialogsPropsType = {
    store: StoreType
}
export const DialogsContainer = (props: DialogsPropsType) => {


    const onSendMessageClick = () => {
      props.store.dispatch(sendMessageBodyCreator(props.store.getState().dialogsReducer.newMessageBody))
    }
    const onChangeMessageText = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs dialogsPage={props.store.getState().dialogsReducer} onChangeMessageText={onChangeMessageText} onSendMessageClick={onSendMessageClick}/>
    )
}