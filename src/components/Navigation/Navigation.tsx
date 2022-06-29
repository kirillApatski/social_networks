import React from "react";
import s from "./Navigation.module.css"

export const Navigation = () => {
    return (
        <section className={s.navigation}>
            <nav>
                <ul>
                    <li className={s.item}><a>Profile</a></li>
                    <li className={`${s.item} ${s.active}`}><a>Messages</a></li>
                    <li className={s.item}><a>News</a></li>
                    <li className={s.item}><a>Music</a></li>
                    <li className={s.item}><a>Settings</a></li>
                </ul>
            </nav>
        </section>
    )
}