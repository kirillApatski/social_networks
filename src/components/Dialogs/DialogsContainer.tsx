import React from "react";
import {
    DialogsPagesType,
    sendMessageBodyCreator,
    updateNewMessageBodyCreator
} from "../redax/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StoreType} from "../redax/redux-store";


// type DialogsPropsType = {
//     store: StoreType
// }
// export const DialogsContainer = (props: DialogsPropsType) => {
//     const onSendMessageClick = () => {
//       props.store.dispatch(sendMessageBodyCreator())
//     }
//     const onChangeMessageText = (body: string) => {
//         props.store.dispatch(updateNewMessageBodyCreator(body))
//     }
//     return (
//         <Dialogs dialogsPage={props.store.getState().dialogsPages} onChangeMessageText={onChangeMessageText} onSendMessageClick={onSendMessageClick}/>
//     )
// }

type mapStateToPropsType = {
    dialogsPage: DialogsPagesType
}
type mapDispatchToPropsType = {
    onChangeMessageText: (body: string) => void
    onSendMessageClick: () => void
}
const mapStateToProps = (state: StoreType): mapStateToPropsType => {
    return {
        dialogsPage : state.dialogsPages,
    }
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        onChangeMessageText: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        onSendMessageClick: () => {
            dispatch(sendMessageBodyCreator())

        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
