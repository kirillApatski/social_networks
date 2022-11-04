import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {FromDataType} from "../components/Login/Login";
import {ThunkAction} from "redux-thunk";
import {AppActionType, AppStateType} from "./redux-store";

export type setUserDataType = ReturnType<typeof setUserData>

export type AuthActionType = setUserDataType

export type InitialState = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false

}

export const authReducer = (state: InitialState = initialState, action: AuthActionType): InitialState => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.payload
            }
        default :
            return state
    }
}
export const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {type: "SET-USER-DATA", payload: {id, email, login, isAuth}} as const
}

export const userAuth = () => (dispatch: Dispatch<AuthActionType>) => {
    authAPI.me()
        .then(res => {
            if (res.data.resultCode === 0) {
                let {email, id, login} = res.data.data
                dispatch(setUserData(id, email, login, true))
            }
        })
}
export const loginTC = (formData: FromDataType): AppThunk  => (dispatch) => {
    authAPI.login(formData)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(userAuth())
            }
        })
}
export const logOutTC = (): AppThunk  => (dispatch) => {
    authAPI.logOut()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })
}


export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionType>

