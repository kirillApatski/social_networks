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
    getInitializationState: () => InitializationStateType
    onChange: () => void
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof changeNewTextActionCreator>
    | ReturnType<typeof sendMessageBodyCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>

const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";

const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

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

    getInitializationState() {
        return this._initializationState
    },
    subscribe(callBack) {
        this.onChange = callBack
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost: PostsType = {
                id: 5,
                message: action.postText,
                likeCount: 0
            }
            this._initializationState.profilePages.posts.push(newPost)
            this._initializationState.profilePages.newPostText = ""
            this.onChange()
        } else if (action.type === CHANGE_NEW_POST_TEXT) {
            this._initializationState.profilePages.newPostText = action.newText
            this.onChange()
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._initializationState.dialogsPages.newMessageBody = action.body
            this.onChange()
        } else if (action.type === SEND_MESSAGE) {
            let body = this._initializationState.dialogsPages.newMessageBody;
            this._initializationState.dialogsPages.newMessageBody = ""
            this._initializationState.dialogsPages.messages.push({id: 5, message: body})
            this.onChange()
        }
    }
}

export const addPostActionCreator = (postText: string) => ({type: ADD_POST, postText}) as const
export const changeNewTextActionCreator = (newText: string) => ({type: CHANGE_NEW_POST_TEXT, newText}) as const

export const sendMessageBodyCreator = (newText: string) => ({type: SEND_MESSAGE, newText}) as const
export const updateNewMessageBodyCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body}) as const
