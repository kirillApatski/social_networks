import React from 'react';
import {connect} from "react-redux";
import {
    follow, requestUsers,
    toggleFollowingProgress, toggleIsFetching,
    unfollow,
    userType
} from "../../redax/usersReducer";
import {AppStateType} from "../../redax/redux-store";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPagesSize,
    getUsers,
    getUsersTotalCount
} from "../../redax/usersSelectors";

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
    requestUsers: (currentPage: number, pagesSize: number) => void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType


export class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pagesSize)
    }

    onChangePages = (page: number) => {
        this.props.requestUsers(page, this.props.pagesSize)
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
        users: getUsers(state),
        pagesSize: getPagesSize(state),
        usersTotalCount: getUsersTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {follow, unfollow, toggleIsFetching, toggleFollowingProgress, requestUsers}),
)(UsersContainer)


