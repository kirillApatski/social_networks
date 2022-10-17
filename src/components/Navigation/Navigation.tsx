import React from "react";
import s from "./Navigation.module.css"
import {NavLink} from "react-router-dom";

export const Navigation = () => {
    return (
        <section className={s.navigation}>
            <nav>
                <ul>
                    <li className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
                    <li className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></li>
                    <li className={s.item}><NavLink to="/users" activeClassName={s.active}>Users</NavLink></li>
                    <li className={s.item}><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
                    <li className={s.item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
                    <li className={s.item}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></li>
                    <li className={s.item}><NavLink to="/login" activeClassName={s.active}>Login</NavLink></li>
                </ul>
            </nav>
        </section>
    )
}