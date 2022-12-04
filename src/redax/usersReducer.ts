import {userAPI} from "../api/api";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../utils/object-helpers";
import {AppThunkType} from "./redux-store";

export type InitialState = typeof initialState

export type followACType = ReturnType<typeof followSuccess>
export type unfollowACType = ReturnType<typeof unfollowSuccess>
export type setUsersACType = ReturnType<typeof setUsers>
export type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export type setUsersTotalCountACType = ReturnType<typeof setUsersTotalCount>
export type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export type toggleFollowingProgressType = ReturnType<typeof toggleFollowingProgress>
export type UserActionsTypes =
    setUsersACType
    | setCurrentPageACType
    | setUsersTotalCountACType
    | toggleIsFetchingACType
    | toggleFollowingProgressType
    | followUnfollowType

export type FollowUnfollowResponseType = {
    data: {}
    fieldsErrors: []
    messages: []
    resultCode: number
}

type followUnfollowType = followACType | unfollowACType

export type userType = {
    id: number
    followed: boolean
    name: string
    status: string
    "uniqueUrlName": string,
    "photos": {
        "small": string,
        "large": string
    },
}
export type initialStateType = typeof initialState
let initialState = {
    users: [] as Array<userType>,
    pagesSize: 10,
    usersTotalCount: 5,
    currentPage: 1,
    isFetching: false,
    followingProgress: [] as Array<number>
}

export const usersReducer = (state: initialStateType = initialState, action: UserActionsTypes): InitialState => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case "SET-USERS":
            return {
                ...state,
                users: [...action.users]
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "SET-USERS-TOTAL-COUNT":
            return {
                ...state,
                usersTotalCount: action.totalCount
            }
        case "TOGGLE-IS-FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "TOGGLE-IS-FOLLOWING-PROGRESS":
            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId)
            }

    }
    return state
}

export const followSuccess = (userId: number) => ({type: "FOLLOW", userId}) as const
export const unfollowSuccess = (userId: number) => ({type: "UNFOLLOW", userId}) as const
export const setUsers = (users: Array<userType>) => ({type: "SET-USERS", users}) as const
export const setCurrentPage = (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage}) as const
export const setUsersTotalCount = (totalCount: number) => ({type: "SET-USERS-TOTAL-COUNT", totalCount}) as const
export const toggleIsFetching = (isFetching: boolean) => ({type: "TOGGLE-IS-FETCHING", isFetching}) as const
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: "TOGGLE-IS-FOLLOWING-PROGRESS",
    isFetching,
    userId
}) as const


export const requestUsers = (currentPage: number, pagesSize: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsFetching(true))
        const response = await userAPI.getUsers(currentPage, pagesSize)
        dispatch(setUsers(response.data.items))
        dispatch(setUsersTotalCount(response.data.totalCount))
        dispatch(toggleIsFetching(false))
    }
}

const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: (userId: number) => Promise<FollowUnfollowResponseType>, actionCreator: (userId: number) => followUnfollowType) => {
    dispatch(toggleFollowingProgress(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId: number): AppThunkType => async (dispatch) => {
    let apiMethod = userAPI.followUser.bind(userId)
    followUnfollowFlow(dispatch, userId, apiMethod, followSuccess)
}

export const unfollow = (userId: number): AppThunkType => async (dispatch) => {
    let apiMethod = userAPI.unFollowUser.bind(userId)
    followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess)
}



