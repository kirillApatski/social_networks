import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import {InitialState, setUserData} from "../../redax/authReducer";
import {userAPI} from "../../api/api";

export class HeaderContainer extends React.Component<InitialState & mapDispatchToProps> {

    componentDidMount() {
        userAPI.auth()
            .then(data => {
                if(data.resultCode === 0){
                    let{email, id, login} = data.data
                    this.props.setUserData(id, email, login)
                }
            })
    }

    render() {
        return (
            <Header login={this.props.login} email={this.props.email} id={this.props.id} isAuth={this.props.isAuth} />
        )
    }
}

export type mapDispatchToProps = {
    setUserData: (id: number, email: string, login: string) => void
}

const mapStateToProps = (state: AppStateType): InitialState => {
    return{
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {setUserData})(HeaderContainer)