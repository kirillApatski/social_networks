import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleFollowingProgress, toggleIsFetching,
    unfollow,
    userType
} from "../../redax/usersReducer";
import {AppStateType} from "../../redax/redux-store";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {userAPI} from "../../api/api";

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
    setUsers: (users: Array<userType>) => void
    setUsersTotalCount: (totalCount: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: string) => void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType


export class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
            userAPI.getUsers(this.props.currentPage, this.props.pagesSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setUsersTotalCount(data.totalCount)
                this.props.toggleIsFetching(false)
            })
    }

    onChangePages = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)
            userAPI.getUsers(page, this.props.pagesSize)
            .then(data=> {
                this.props.setUsers(data.items)
                this.props.setUsersTotalCount(data.totalCount)
                this.props.toggleIsFetching(false)
            })
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
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
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



export default connect(mapStateToProps, {follow, unfollow, setUsers, setUsersTotalCount, setCurrentPage, toggleIsFetching, toggleFollowingProgress})(UsersContainer)

