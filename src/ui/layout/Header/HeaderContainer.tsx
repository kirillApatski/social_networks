import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../../bll/redax/redux-store";
import {InitialState, setUserData, userAuth} from "../../../bll/redax/authReducer";

export class HeaderContainer extends React.Component<InitialState & mapDispatchToProps> {

    render() {
        return (
            <Header
                login={this.props.login}
                email={this.props.email}
                id={this.props.id}
                isAuth={this.props.isAuth}
                profileImg={this.props.profileImg}
                captcha={this.props.captcha}
            />
        )
    }
}

export type mapDispatchToProps = {
    setUserData: (id: number, email: string, login: string, isAuth: boolean) => void
    userAuth: () => void
}

const mapStateToProps = (state: AppStateType): InitialState => {
    return{
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        profileImg: state.profilePages.profile.photos?.small,
        captcha: state.auth.captcha
    }
}


export default connect(mapStateToProps, {setUserData, userAuth})(HeaderContainer)