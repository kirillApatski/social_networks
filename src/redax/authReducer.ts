import {Dispatch} from "redux";
import {userAPI} from "../api/api";

export type setUserDataType = ReturnType<typeof setUserData>

export type ActionType = setUserDataType

export type InitialState = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false

}

export const authReducer = (state: InitialState = initialState, action: ActionType): InitialState => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default :
            return state

    }
}
export const setUserData = (id: number, email: string, login: string) => {
    return {type: "SET-USER-DATA", data: {id, email, login}} as const
}

export const userAuth = () => {
    return (dispatch: Dispatch) => {
        userAPI.auth()
            .then(data => {
                if(data.resultCode === 0){
                    let{email, id, login} = data.data
                    dispatch(setUserData(id, email, login))
                }
            })
    }
}
