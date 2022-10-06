import {
    DialogsPagesType,
    sendMessageBodyCreator,
    updateNewMessageBodyCreator
} from "../../redax/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redax/redux-store";



type mapStateToPropsType = {
    dialogsPage: DialogsPagesType
}
type mapDispatchToPropsType = {
    onChangeMessageText: (body: string) => void
    onSendMessageClick: () => void
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
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
