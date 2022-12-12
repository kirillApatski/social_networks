import React from 'react';
import {connect} from "react-redux";
import {
    follow, requestUsers,
    toggleFollowingProgress, toggleIsFetching,
    unfollow,
    userType
} from "../../../bll/redax/usersReducer";
import {AppStateType} from "../../../bll/redax/redux-store";
import {Users} from "./Users";
import {Preloader} from "../../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPagesSize,
    getUsers,
    getUsersTotalCount
} from "../../../bll/redax/usersSelectors";

export type mapStateToPropsType = {
    users: userType[]
    pagesSize: number
    usersTotalCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<number>
}
export type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
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
                    pagesSize={this.props.pagesSize}
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


