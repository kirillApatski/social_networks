import React from 'react';
import {navLinks} from "./Sidebar/navLinksData";
import {NavLink} from "react-router-dom";
import {LinkStyled} from "./LinkStyled";

export const NavLinks = () => {
    return (
        <>
            {
                navLinks.map(({id, label, link}) => {
                    return (
                        <LinkStyled key={id}>
                            <NavLink to={link}>
                                {label}
                            </NavLink>
                        </LinkStyled>
                    )
                })
            }
        </>
    );
};

