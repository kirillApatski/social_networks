import {Dispatch} from "redux";
import {authAPI} from "../../api/api";
import {FromDataType} from "../../ui/pages/Login/Login";
import {ThunkAction} from "redux-thunk";
import {AppActionType, AppStateType} from "./redux-store";
import {stopSubmit} from "redux-form";

export type setUserDataType = ReturnType<typeof setUserData>
type stopSubmitType = ReturnType<typeof stopSubmit>

export type AuthActionType = setUserDataType | stopSubmitType

export type InitialState = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    profileImg?: string | null
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


export const userAuth = () => async (dispatch: Dispatch<AuthActionType>) => {
    const response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {email, id, login} = response.data.data
        dispatch(setUserData(id, email, login, true))
    }
}
export const loginTC = (formData: FromDataType): AppThunk => async (dispatch) => {
    const response = await authAPI.login(formData)
    if (response.data.resultCode === 0) {
        dispatch(userAuth())
    } else {
        let errorMessages = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
        dispatch(stopSubmit('login', {_error: errorMessages}))
    }
}
export const logOutTC = (): AppThunk => async (dispatch) => {
    const response = await authAPI.logOut()
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}


export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionType>

