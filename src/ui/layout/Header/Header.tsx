import React from "react";
import {InitialState, logOutTC} from "../../../bll/redax/authReducer";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {HeaderWrapper} from "../../stylesComponent/HeaderWrapper";
import {Logo} from "../../stylesComponent/Logo";
import {WrapperContainer} from "../../styles/WrapperContainer";
import {ButtonStyled} from "../../components/Button/ButtonStyled";
import {AppStateType} from "../../../bll/redax/redux-store";
import {Avatar} from "../../components/Avatar/Avatar";
import {Wrapper} from "../../styles/Wrapper";


export const Header = (props: InitialState) => {
    const avatar = useSelector<AppStateType>(state => state.profilePages.profile?.photos.small)
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(logOutTC())
    }

    return (
        <HeaderWrapper>
            <Logo>LOGO</Logo>
            <Wrapper>
                {props.isAuth
                    ? <WrapperContainer>
                        <Avatar size={"small"}  img={`${avatar}`}/>
                        <ButtonStyled onClick={logOut}>Log Out</ButtonStyled>
                    </WrapperContainer>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </Wrapper>
        </HeaderWrapper>
    )
};