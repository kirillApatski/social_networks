import {AppStateType} from "./redux-store";

export const getUsers = (state: AppStateType) => {
    return state.usersPages.users
}
export const getPagesSize = (state: AppStateType) => {
    return state.usersPages.pagesSize
}
export const getUsersTotalCount = (state: AppStateType) => {
    return state.usersPages.usersTotalCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPages.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPages.isFetching
}
export const getFollowingProgress = (state: AppStateType) => {
    return state.usersPages.followingProgress
}