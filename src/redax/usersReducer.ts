export type InitialState = typeof initialState

export type followACType = ReturnType<typeof follow>
export type unfollowACType = ReturnType<typeof unfollow>
export type setUsersACType = ReturnType<typeof setUsers>
export type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export type setUsersTotalCountACType = ReturnType<typeof setUsersTotalCount>
export type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export type toggleFollowingProgressType = ReturnType<typeof toggleFollowingProgress>
export type ActionsTypes =
    followACType
    | unfollowACType
    | setUsersACType
    | setCurrentPageACType
    | setUsersTotalCountACType
    | toggleIsFetchingACType
    | toggleFollowingProgressType

export type userType = {
    id: string
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
    followingProgress: [] as Array<string>
}

export const usersReducer = (state: initialStateType = initialState, action: ActionsTypes): InitialState => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: true} : user)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: false} : user)
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

export const follow = (userId: string) => ({type: "FOLLOW", userId}) as const
export const unfollow = (userId: string) => ({type: "UNFOLLOW", userId}) as const
export const setUsers = (users: Array<userType>) => ({type: "SET-USERS", users}) as const
export const setCurrentPage = (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage}) as const
export const setUsersTotalCount = (totalCount: number) => ({type: "SET-USERS-TOTAL-COUNT", totalCount}) as const
export const toggleIsFetching = (isFetching: boolean) => ({type: "TOGGLE-IS-FETCHING", isFetching}) as const
export const toggleFollowingProgress = (isFetching: boolean, userId: string) => ({
    type: "TOGGLE-IS-FOLLOWING-PROGRESS",
    isFetching,
    userId
}) as const