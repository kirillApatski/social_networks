import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redax/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
}
const mapStateToPropsForRedirect = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export function WithAuthRedirect <T>(Component: ComponentType<T>){

    function RedirectComponent(props: MapStateToPropsType) {
        let {isAuth,  ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}