import React from "react";
import {addPostActionCreator, changeNewTextActionCreator} from "../../redax/profileReducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../redax/redux-store";


type MyPostsContainerPropsType = {
    store: StoreType
}

export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    const addPost = () => {
        props.store.dispatch(addPostActionCreator(props.store.getState().profileReducer.newPostText))
    }
    const changeNewText = (text:string) => {
        props.store.dispatch(changeNewTextActionCreator(text))
    }
    return (
        <MyPosts newPostText={props.store.getState().profileReducer.newPostText} changeNewText={changeNewText} addPost={addPost} posts={props.store.getState().profileReducer.posts} />
    )
}