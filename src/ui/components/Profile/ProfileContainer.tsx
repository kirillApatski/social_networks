import React from "react";
import {Profile} from "./Profile";
import {getStatus, getUserProfile, ProfileUserType, updateStatus} from "../../../redax/profileReducer";

import {connect} from "react-redux";
import {AppStateType} from "../../../redax/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../../hok/WithAuthRedirect";
import {compose} from "redux";


export type mapDispatchToPropsTyp = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

export type mapStateToPropsType = {
    profile: ProfileUserType
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}

type PatchParamsType = {
    userId: string
}

export type UserProfileType = mapStateToPropsType & mapDispatchToPropsTyp

type PropsType = RouteComponentProps<PatchParamsType> & UserProfileType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = `${this.props.authorizedUserId}`
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    }
}

export const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePages.profile,
        status: state.profilePages.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)
