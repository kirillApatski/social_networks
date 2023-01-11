import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileActionsTypes, profileReducer} from "./profileReducer";
import {DialogsActionsTypes, dialogsReducer} from "./dialogsReducer";
import {UserActionsTypes, usersReducer} from "./usersReducer";
import {AuthActionType, authReducer} from "./authReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import {appReducer} from "./app-reducer";



let rootReducer = combineReducers({
    profilePages: profileReducer,
    dialogsPages: dialogsReducer,
    usersPages: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionType>

export let store = createStore(rootReducer, applyMiddleware(thunk))

export type AppDispatch = typeof store.dispatch

export type AppActionType =
    AuthActionType
    | UserActionsTypes
    | ProfileActionsTypes
    | DialogsActionsTypes