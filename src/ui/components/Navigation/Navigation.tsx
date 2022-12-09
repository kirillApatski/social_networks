import React from "react";
import {NavLink} from "react-router-dom";
import {NavigationWrapper} from "../../stylesComponent/NavigationWrapper";
import {SSidebar} from "../../stylesComponent/Sidebar/Sidebar";

export const Navigation = () => {
    return (
            <NavigationWrapper>
                <SSidebar>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/dialogs">Messages</NavLink></li>
                    <li><NavLink to="/users" >Users</NavLink></li>
                    <li><NavLink to="/news" >News</NavLink></li>
                    <li><NavLink to="/music" >Music</NavLink></li>
                    <li><NavLink to="/settings" >Settings</NavLink></li>
                </SSidebar>
            </NavigationWrapper>
    )
}

