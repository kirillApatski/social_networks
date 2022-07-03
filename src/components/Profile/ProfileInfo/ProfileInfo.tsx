import React from 'react';
import s from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
    return (
        <div>
            <div className={s.profilePicture}>
                <img
                    src="https://yahont-hotel.ru/ckeditor_images/chernomorskoje_vid.jpg"
                    alt="pictures"/>
            </div>
            <div className={s.description}>
                avatar + descr
            </div>
        </div>
    );
};

