import {
    DialogsPagesType,
    sendMessageBodyCreator,
} from "../../../bll/redax/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../../bll/redax/redux-store";
import {WithAuthRedirect} from "../../../hok/WithAuthRedirect";
import React from "react";



type mapStateToPropsType = {
    dialogsPage: DialogsPagesType
    isAuth: boolean
}
type mapDispatchToPropsType = {
    onSendMessageClick: (newMessageBody: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage : state.dialogsPages,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        onSendMessageClick: (newMessageBody: string) => {
            dispatch(sendMessageBodyCreator(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

