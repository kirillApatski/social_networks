import {Dispatch} from "redux";
import {authAPI, securityApi} from "../../api/api";
import {FromDataType} from "../../ui/pages/Login/Login";
import {ThunkAction} from "redux-thunk";
import {AppActionType, AppStateType} from "./redux-store";
import {stopSubmit} from "redux-form";

export type setUserDataType = ReturnType<typeof setUserData>
type stopSubmitType = ReturnType<typeof stopSubmit>
type getCaptchaUrlSuccessType = ReturnType<typeof getCaptchaUrlSuccess>

export type AuthActionType = setUserDataType | stopSubmitType | getCaptchaUrlSuccessType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionType>


export type InitialState = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    profileImg?: string | null
    captcha: string
}

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: ''
}

export const authReducer = (state: InitialState = initialState, action: AuthActionType): InitialState => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.payload
            }
        case "GET-CAPTCHA-URL":
            return {
                ...state,
                captcha: action.payload.captchaUrl
            }
        default :
            return state
    }
}


export const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {type: "SET-USER-DATA", payload: {id, email, login, isAuth}} as const
}
export const getCaptchaUrlSuccess = (captchaUrl: string) => {
    return {type: "GET-CAPTCHA-URL", payload: {captchaUrl}} as const
}


export const userAuth = () => async (dispatch: Dispatch<AuthActionType>) => {
    const response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {email, id, login} = response.data.data
        dispatch(setUserData(id, email, login, true))
    }
}

export const getCaptchaUrl = () => async (dispatch: Dispatch<AuthActionType>) => {
    const response = await securityApi.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const loginTC = (formData: FromDataType): AppThunk => async (dispatch) => {
    const response = await authAPI.login(formData)
    if (response.data.resultCode === 0) {
        dispatch(userAuth())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
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



