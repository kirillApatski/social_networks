import React from "react";
import s from "./Header.module.css";
import {InitialState, logOutTC} from "../../redax/authReducer";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";



export const Header = (props: InitialState) => {
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(logOutTC())
    }

    return (
        <header className={s.header}>
            <img src="https://www.logolynx.com/images/logolynx/3a/3a405b9b2166f2ca3ef2d7722b35b766.png" alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} --- <button onClick={logOut}>Log Out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
};