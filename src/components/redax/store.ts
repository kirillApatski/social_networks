import {addPostActionCreator, changeNewTextActionCreator} from "./profileReducer";
import {sendMessageBodyCreator, updateNewMessageBodyCreator} from "./dialogsReducer";

export type InitializationStateType = {
    profilePages: ProfilePages
    dialogsPages: DialogsPagesType

}
export type ProfilePages = {
    posts: PostsType[]
    newPostText: string
}
export type PostsType = {
    id: number
    message: string
    likeCount: number
}
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
export type StoreType = {
    _initializationState: InitializationStateType
    subscribe: (callBack: () => void) => void
    getState: () => InitializationStateType
    onChange: () => void
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof changeNewTextActionCreator>
    | ReturnType<typeof sendMessageBodyCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>

export const store: StoreType = {
    _initializationState: {
        profilePages: {
            newPostText: "",
            posts: [
                {id: 1, message: "Hi, how are you", likeCount: 15},
                {id: 2, message: "It's my first post", likeCount: 20},
            ]
        },
        dialogsPages: {
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
    },
    onChange() {
        console.log("state changed")
    },

    getState() {
        return this._initializationState
    },
    subscribe(callBack) {
        this.onChange = callBack
    },
    dispatch(action) {
        // this.getState().profilePages = profileReducer(this.getState().profilePages, action)
        // this.getState().dialogsPages = dialogsReducer(this.getState().dialogsPages, action)
        this.onChange()
    }
}

// export const sendMessageBodyCreator = () => ({type: "SEND_MESSAGE"}) as const
// export const updateNewMessageBodyCreator = (body: string) => ({type: "UPDATE_NEW_MESSAGE_BODY", body}) as const


