import React from "react";
import {addPostActionCreator, changeNewTextActionCreator, PostsType} from "../../redax/profileReducer";
import {MyPosts} from "./MyPosts";

import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StoreType} from "../../redax/redux-store";




// export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
//     const addPost = () => {
//         props.store.dispatch(addPostActionCreator(props.store.getState().profilePages.newPostText))
//     }
//     const changeNewText = (text:string) => {
//         props.store.dispatch(changeNewTextActionCreator(text))
//     }
//     return (
//         <MyPosts newPostText={props.store.getState().profilePages.newPostText} changeNewText={changeNewText} addPost={addPost} posts={props.store.getState().profilePages.posts} />
//     )
// }
type mapStateToPropsType = {
    newPostText: string
    posts: PostsType[]
}
const mapStateToProps = (state: StoreType): mapStateToPropsType => {
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
