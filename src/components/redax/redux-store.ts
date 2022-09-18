import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";

export type AppStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    profilePages: profileReducer,
    dialogsPages: dialogsReducer,
    usersPages: usersReducer
})

export let store = createStore(rootReducer)