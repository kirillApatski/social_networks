import React from "react";
import {Profile} from "./Profile";
import {getUserProfile, ProfileUserType, setUserProfile} from "../../redax/profileReducer";

import {connect} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";



export type mapDispatchToPropsTyp = {
    setUserProfile: (profile: ProfileUserType) => void
    getUserProfile: (userId: string) => void
}

export type mapStateToPropsType = {
    profile: ProfileUserType
}
type PatchParamsType = {
    userId: string
}
export type UserProfileType = mapStateToPropsType & mapDispatchToPropsTyp

type PropsType = RouteComponentProps<PatchParamsType> & UserProfileType

class ProfileContainer extends React.Component<PropsType>{
    componentDidMount() {

        let userId = this.props.match.params.userId
        if(!userId){
            userId = '2'
        }
        this.props.getUserProfile(userId)
    }
    render(){
        return <Profile profile={this.props.profile} />
    }
}


export const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePages.profile
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile, getUserProfile})(WithUrlDataContainerComponent)