import React from "react";
import {addPostActionCreator, changeNewTextActionCreator, PostsType} from "../../redax/profileReducer";
import {MyPosts} from "./MyPosts";

import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redax/redux-store";


type mapStateToPropsType = {
    newPostText: string
    posts: PostsType[]
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        newPostText: state.profilePages.newPostText,
        posts: state.profilePages.posts
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        changeNewText: (text: string) => {
            dispatch(changeNewTextActionCreator(text))
        },
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
