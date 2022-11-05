import React from 'react';
import {connect} from "react-redux";
import {
    follow, getUsers,
    toggleFollowingProgress, toggleIsFetching,
    unfollow,
    userType
} from "../../redax/usersReducer";
import {AppStateType} from "../../redax/redux-store";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";

export type mapStateToPropsType = {
    users: userType[]
    pagesSize: number
    usersTotalCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<string>
}
export type mapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: string) => void
    getUsers: (currentPage: number, pagesSize: number) => void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType


export class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pagesSize)
    }

    onChangePages = (page: number) => {
        this.props.getUsers(page, this.props.pagesSize)
    }
    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : <Users
                    users={this.props.users}
                    onChangePages={this.onChangePages}
                    currentPage={this.props.currentPage}
                    pagesSize={this.props.currentPage}
                    follow={this.props.follow}
                    usersTotalCount={this.props.usersTotalCount}
                    unfollow={this.props.unfollow}
                    followingProgress={this.props.followingProgress}
                />}

            </>

        )
    }
}


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPages.users,
        pagesSize: state.usersPages.pagesSize,
        usersTotalCount: state.usersPages.usersTotalCount,
        currentPage: state.usersPages.currentPage,
        isFetching: state.usersPages.isFetching,
        followingProgress: state.usersPages.followingProgress
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {follow, unfollow, toggleIsFetching, toggleFollowingProgress, getUsers}),
)(UsersContainer)


