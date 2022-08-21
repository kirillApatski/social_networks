import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

export type StoreType = typeof store

let reducers = combineReducers({
    profileReducer,
    dialogsReducer
})

export let store = createStore(reducers)