export type PostsType = {
    id: number
    message: string
    likeCount: number
}

export type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>
export type changeNewTextActionCreatorType = ReturnType<typeof changeNewTextActionCreator>
export type setUserProfileType = ReturnType<typeof setUserProfile>
export type ActionsTypes = addPostActionCreatorType | changeNewTextActionCreatorType | setUserProfileType

// export type InitialState = typeof initialState
export type InitialStateType = {
    newPostText: string
    posts: PostsType[]
    profile: ProfileUserType | null
}
let initialState = {
    newPostText: "",
    posts: [
        {id: 1, message: "Hi, how are you", likeCount: 15},
        {id: 2, message: "It's my first post", likeCount: 20},
    ] as Array<PostsType>,
    profile: null
}
export type ProfileUserType = {
    aboutMe: string
    contacts: {
        facebook: null | string
        website: null | string
        vk: null | string
        twitter: null | string
        instagram: null | string
        youtube: null | string
        github: null | string
        mainLink: null | string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: string
    photos: {
        small: string
        large: string
    }
} | null

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
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
        case "SET-USER-PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

export const addPostActionCreator = (postText: string) => ({type: "ADD-POST", postText}) as const
export const changeNewTextActionCreator = (newText: string) => ({type: "UPDATE-NEW-POST-TEXT", newText}) as const
export const setUserProfile = (profile: ProfileUserType) => ({type: "SET-USER-PROFILE", profile}) as const