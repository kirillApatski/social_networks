import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

export type StoreType = ReturnType<typeof reducers>

let reducers = combineReducers({
    profilePages: profileReducer,
    dialogsPages: dialogsReducer
})

export let store = createStore(reducers)