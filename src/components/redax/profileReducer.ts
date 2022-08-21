import {ActionsTypes, PostsType, ProfilePages} from "./store";

export const ADD_POST = "ADD-POST";
export const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";

let initialState = {
        newPostText: "",
        posts: [
            {id: 1, message: "Hi, how are you", likeCount: 15},
            {id: 2, message: "It's my first post", likeCount: 20},
        ]
    }

export const profileReducer = (state: ProfilePages = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsType = {
                id: 5,
                message: action.postText,
                likeCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ""
            break;
        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.newText
            break;
    }
    return state
}

export const addPostActionCreator = (postText: string) => ({type: ADD_POST, postText}) as const
export const changeNewTextActionCreator = (newText: string) => ({type: CHANGE_NEW_POST_TEXT, newText}) as const