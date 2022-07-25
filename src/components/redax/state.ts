let onChange = () => {
    console.log("dsdsdsdsd")
}
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
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}


export const initializationState: InitializationStateType = {
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
    }
}

export const addPost = (postText: string) => {
    let newPost: PostsType = {
        id: 5,
        message: postText,
        likeCount: 0
    }
    initializationState.profilePages.posts.push(newPost)
    onChange()

}

export const changeNewPostText = (newText:string) => {
    initializationState.profilePages.newPostText = newText
    onChange()
}

export const subscribe  = (callBack: () => void) => {
    onChange = callBack
}

