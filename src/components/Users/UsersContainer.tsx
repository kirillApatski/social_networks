import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleIsFetching,
    unfollow,
    userType
} from "../redax/usersReducer";
import {AppStateType} from "../redax/redux-store";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

export type mapStateToPropsType = {
    users: userType[]
    pagesSize: number
    usersTotalCount: number
    currentPage: number
    isFetching: boolean
}
export type mapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<userType>) => void
    setUsersTotalCount: (totalCount: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType


export class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount)
                this.props.toggleIsFetching(false)
            })
    }

    onChangePages = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pagesSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount)
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
        isFetching: state.usersPages.isFetching
    }
}



export default connect(mapStateToProps, {follow, unfollow, setUsers, setUsersTotalCount, setCurrentPage, toggleIsFetching})(UsersContainer)

