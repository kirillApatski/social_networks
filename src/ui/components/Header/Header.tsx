import React from "react";
import {InitialState, logOutTC} from "../../../redax/authReducer";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {HeaderWrapper} from "../../stylesComponent/HeaderWrapper";
import {Logo} from "../../stylesComponent/Logo";
import {SButton} from "../../stylesComponent/Button";
import {WrapperContainer} from "../../stylesComponent/WrapperContainer";
import {Avatar} from "../../stylesComponent/Avatar";


export const Header = (props: InitialState) => {
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(logOutTC())
    }

    return (
        <HeaderWrapper>
            <Logo>LOGO</Logo>
            <div>
                {props.isAuth
                    ? <WrapperContainer>
                        <Avatar width={'35px'} height={'35px'} src={props.profileImg} alt="avatar"/>
                        <SButton onClick={logOut}>Log Out</SButton>
                    </WrapperContainer>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </HeaderWrapper>
    )
};