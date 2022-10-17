import {
    DialogsPagesType,
    sendMessageBodyCreator,
    updateNewMessageBodyCreator
} from "../../redax/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../redax/redux-store";
import {WithAuthRedirect} from "../../hok/WithAuthRedirect";
import React from "react";



type mapStateToPropsType = {
    dialogsPage: DialogsPagesType
    isAuth: boolean
}
type mapDispatchToPropsType = {
    onChangeMessageText: (body: string) => void
    onSendMessageClick: () => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage : state.dialogsPages,
        isAuth: state.auth.isAuth
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

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

