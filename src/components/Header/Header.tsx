import React from "react";
import s from "./Header.module.css";
import {InitialState} from "../redax/authReducer";
import {NavLink} from "react-router-dom";



export const Header = (props: InitialState) => {
    return (
        <header className={s.header}>
            <img src="https://www.logolynx.com/images/logolynx/3a/3a405b9b2166f2ca3ef2d7722b35b766.png" alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
};