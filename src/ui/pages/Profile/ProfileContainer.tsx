import React from "react";
import {Profile} from "./Profile";
import {getPhoto, getStatus, getUserProfile, ProfileUserType, updateStatus} from "../../../bll/redax/profileReducer";

import {connect} from "react-redux";
import {AppStateType} from "../../../bll/redax/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../../hok/WithAuthRedirect";
import {compose} from "redux";


export type mapDispatchToPropsTyp = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
    getPhoto: (photo: any) => void
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
    componentDidUpdate(prevProps: any, prevState: any, snapshot?: any) {
        let userId = this.props.match.params.userId
        // if (this.props.profile !== null) {
        //     document.title = this.props.profile.fullName
        // }
        if (prevProps.match.params.userId !== this.props.match.params.userId && this.props.match.params.userId) {
            console.log(prevProps.match.params.userId)
            this.props.getUserProfile(this.props.match.params.userId)
            this.props.getStatus(this.props.match.params.userId)
        }
    }
    componentWillUnmount() {
        document.title = 'Social network'
    }
    render() {
        return <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} getPhoto={this.props.getPhoto}/>
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
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, getPhoto}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)
