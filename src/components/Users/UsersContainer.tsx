import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unfollowAC, userType} from "../redax/usersReducer";
import {Dispatch} from "redux";
import {AppStateType} from "../redax/redux-store";

export type mapStateToPropsType = {
    users: userType[]
}
export type mapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<userType>) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPages.users
    }
}

export const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: string) => {
            dispatch(followAC(userID))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<userType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users)

