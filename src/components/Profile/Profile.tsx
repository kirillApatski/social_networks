import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <section>
            <div className={s.profilePicture}>
                <img
                    src="https://yahont-hotel.ru/ckeditor_images/chernomorskoje_vid.jpg"
                    alt="pictures"/>
            </div>
            <div>
                avatar + descr
            </div>
            <MyPosts/>
        </section>
    )
}