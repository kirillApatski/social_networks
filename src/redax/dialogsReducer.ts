
export type sendMessageBodyCreatorType = ReturnType<typeof sendMessageBodyCreator>

export type ActionsTypes = sendMessageBodyCreatorType

export type DialogsPagesType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageBody: string
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}

export type InitialStateType = typeof initialState

let initialState = {
    dialogs: [
        {id: 1, name: "kirill"},
        {id: 2, name: "Sweta"},
        {id: 3, name: "Dima"},
        {id: 4, name: "Nik"},
        {id: 5, name: "Kate"},
        {id: 6, name: "Max"}
    ] as DialogsType[],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
    ] as MessagesType[],
    newMessageBody: "",
}

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {

        case "SEND_MESSAGE":
            let newMessage = {id: 5, message: action.newMessageBody}
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return state
    }
}

export const sendMessageBodyCreator = (newMessageBody: string) => ({type: "SEND_MESSAGE", newMessageBody}) as const