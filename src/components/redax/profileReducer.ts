
export type PostsType = {
    id: number
    message: string
    likeCount: number
}

export type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>
export type changeNewTextActionCreatorType = ReturnType<typeof changeNewTextActionCreator>
export type ActionsTypes = addPostActionCreatorType | changeNewTextActionCreatorType

export type InitialState = typeof initialState
let initialState = {
        newPostText: "",
        posts: [
            {id: 1, message: "Hi, how are you", likeCount: 15},
            {id: 2, message: "It's my first post", likeCount: 20},
        ] as Array<PostsType>
    }


export const profileReducer = (state: InitialState = initialState, action: ActionsTypes):InitialState => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsType = {
                id: 5,
                message: action.postText,
                likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        case "UPDATE-NEW-POST-TEXT":

            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
}

export const addPostActionCreator = (postText: string) => ({type: "ADD-POST", postText}) as const
export const changeNewTextActionCreator = (newText: string) => ({type: "UPDATE-NEW-POST-TEXT", newText}) as const