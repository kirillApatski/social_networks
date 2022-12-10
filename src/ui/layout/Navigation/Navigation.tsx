import React from "react";
import {NavigationWrapper} from "../../stylesComponent/NavigationWrapper";
import {SidebarStyled} from "./Sidebar/Sidebar";
import {NavLinks} from "./NavLink";

export const Navigation = () => {
    return (
            <NavigationWrapper>
                <SidebarStyled>
                    <NavLinks/>
                </SidebarStyled>
            </NavigationWrapper>
    )
}

