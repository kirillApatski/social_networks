import {addPostActionCreator, PostsType} from "../../../../bll/redax/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../../bll/redax/redux-store";


type mapStateToPropsType = {
    posts: PostsType[]
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePages.posts
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
