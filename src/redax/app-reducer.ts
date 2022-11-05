import {userAuth} from "./authReducer";
import {ThunkAction} from "redux-thunk";
import {AppActionType, AppStateType} from "./redux-store";


export type initializedSuccessType = ReturnType<typeof initializedSuccess>
export type AuthActionType= initializedSuccessType
export type InitialState = {
    initialized: boolean
}

const initialState = {
    initialized: false,
}
export const appReducer = (state: InitialState = initialState, action: AuthActionType): InitialState => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {
                ...state,
                initialized: true
            }
        default :
            return state
    }
}


export const initializedSuccess = () => {
    return {type: "INITIALIZED-SUCCESS", } as const
}


export const initializeApp = (): AppThunk => (dispatch) => {
    let promise = dispatch(userAuth())
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}


export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionType>
