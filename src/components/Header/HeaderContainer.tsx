import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import {InitialState, setUserData, userAuth} from "../../redax/authReducer";

export class HeaderContainer extends React.Component<InitialState & mapDispatchToProps> {

    componentDidMount() {
        this.props.userAuth()
    }

    render() {
        return (
            <Header login={this.props.login} email={this.props.email} id={this.props.id} isAuth={this.props.isAuth} />
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
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {setUserData, userAuth})(HeaderContainer)