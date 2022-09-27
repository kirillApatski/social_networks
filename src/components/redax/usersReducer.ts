export type InitialState = typeof initialState

export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>
export type ActionsTypes = followACType | unfollowACType | setUsersACType

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
    users: [] as Array<userType>
}

export const usersReducer = (state: initialStateType = initialState, action: ActionsTypes): InitialState => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: false} : user)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: true} : user)
            }
        case "SET-USERS":
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
    }
    return state
}

export const followAC = (userId: string) => ({type: "FOLLOW", userId}) as const
export const unfollowAC = (userId: string) => ({type: "UNFOLLOW", userId}) as const
export const setUsersAC = (users: Array<userType>) => ({type: "SET-USERS", users}) as const