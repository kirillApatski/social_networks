import {ActionsTypes, DialogsPagesType} from "./store";

export const SEND_MESSAGE = "SEND_MESSAGE";
export const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

let initialState : DialogsPagesType = {
    dialogs: [
        {id: 1, name: "kirill"},
        {id: 2, name: "Sweta"},
        {id: 3, name: "Dima"},
        {id: 4, name: "Nik"},
        {id: 5, name: "Kate"},
        {id: 6, name: "Max"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
    ],
    newMessageBody: "",
}

export const dialogsReducer = (state: DialogsPagesType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            break;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = ""
            state.messages.push({id: 5, message: body})
            break;
    }
    return state
}

export const sendMessageBodyCreator = (newText: string) => ({type: SEND_MESSAGE, newText}) as const
export const updateNewMessageBodyCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body}) as const