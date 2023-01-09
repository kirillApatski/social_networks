import {Dispatch} from "redux";
import {profileAPI} from "../../api/api";
import {AppThunkType} from "./redux-store";

export type PostsType = {
    id: number
    message: string
    likeCount: number
}

export type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>
export type setUserProfileType = ReturnType<typeof setUserProfile>
export type setUserStatusType = ReturnType<typeof setUserStatus>
export type deletePostACType = ReturnType<typeof deletePostAC>
export type setUserPhotoType = ReturnType<typeof setUserPhoto>
export type ProfileActionsTypes =
    addPostActionCreatorType
    | setUserProfileType
    | setUserStatusType
    | deletePostACType
    | setUserPhotoType

export type InitialStateType = {
    posts: PostsType[]
    profile: ProfileUserType
    status: string
}

export type ProfilePageType = {
    profile: ProfileUserType
    status: string
    posts: Array<PostsType>
}

let initialState: ProfilePageType = {
    posts: [
        {
            id: 1,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam architecto asperiores aspernatur commodi eum exercitationem laboriosam nisi perferendis, quam reiciendis ullam veritatis voluptates voluptatum!",
            likeCount: 15
        },
        {
            id: 2,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam architecto asperiores aspernatur commodi eum exercitationem laboriosam nisi perferendis, quam reiciendis ullam veritatis voluptates voluptatum!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam architecto asperiores aspernatur commodi eum exercitationem laboriosam nisi perferendis, quam reiciendis ullam veritatis voluptates voluptatum!",
            likeCount: 20
        },
    ] as Array<PostsType>,
    profile: {
        contacts: {
            facebook: "",
            website: "",
            vk: "",
            twitter: "",
            youtube: "",
            github: "",
            instagram: "",
            mainLink: ""
        },
        lookingForAJob: false,
        lookingForAJobDescription: "",
        fullName: "",
        userId: 0,
        photos: {
            small: "",
            large: ""
        },
        aboutMe: "",
    },
    status: '',
}

export type ProfileUserType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos?: {
        small: string
        large: string
    }
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsTypes): ProfilePageType => {
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
            }
        case "DELETE-POST":
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
            }
        case "SET-USER-PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        case "SET-STATUS":
            return {
                ...state,
                status: action.status
            }
        case "SET-USER-PHOTO":
            return {
                ...state,
                profile: {
                    ...state.profile!, photos: action.photo
                }
            }
        default:
            return state
    }
}

export const addPostActionCreator = (postText: string) => {
    return  {type: "ADD-POST", postText} as const
}
export const setUserProfile = (profile: ProfileUserType) => ({type: "SET-USER-PROFILE", profile}) as const
export const setUserPhoto = (photo: { large: string, small: string }) => ({type: "SET-USER-PHOTO", photo}) as const
export const setUserStatus = (status: string) => ({type: "SET-STATUS", status}) as const
export const deletePostAC = (postId: number) => ({type: "DELETE-POST", postId}) as const


export const getUserProfile = (userId: any): AppThunkType => {
    return (dispatch: Dispatch) => {
        profileAPI.getUserProfile(userId).then(res => {
            dispatch(setUserProfile(res.data))
        })
    }
}

export const getStatus = (userId: number): AppThunkType => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId).then(res => {
            dispatch(setUserStatus(res.data))
        })
    }
}
export const getPhoto = (file: any): AppThunkType => {
    return (dispatch: Dispatch) => {
        profileAPI.updatePhoto(file)
            .then(res => {
                dispatch(setUserPhoto(res.data.data.photos))
            })
    }
}

export const updateStatus = (status: string): AppThunkType => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
            })
    }
}

export const updateUserProfile = (dataProfile: ProfileUserType): any => {
    return (dispatch: Dispatch) => {
        profileAPI.updateUserProfile(dataProfile)
    }
}