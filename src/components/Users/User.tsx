import React, {FC} from 'react';
import styles from "./Users.module.css";
import {userType} from "../../redax/usersReducer";
import {NavLink} from "react-router-dom";

type UserPropsType = {
    user: userType
    followingProgress: number[]
    follow: (id: number) => void
    unfollow: (id: number) => void
}

export const User: FC<UserPropsType> = ({user, followingProgress, follow, unfollow}) => {


    return (
        <div>
            <div className={styles.userWrapper} key={user.id}>
                <div className={styles.userAvatar}>
                    <NavLink to={`/profile/` + user.id}>
                        <img
                            src={user.photos.small !== null ? user.photos.small : "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=170667a&w=0&h=Ct4e1kIOdCOrEgvsQg4A1qeuQv944pPFORUQcaGw4oI="}
                            alt="avatar"/>
                    </NavLink>


                    {
                        user.followed
                            ? <button disabled={followingProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }

                                      }>UnFollow</button>

                            : <button disabled={followingProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }

                                      }>Follow</button>
                    }
                </div>
                <div className={styles.userDescription}>
                    <div className={styles.userNameAndStatus}>
                        <span className={styles.userFullName}>{user.name}</span>
                        <span className={styles.userStatus}>{user.status}</span>
                    </div>
                    <div className={styles.userCountryAndCity}>
                        <span className={styles.userCountry}>{"user.location.country"}</span>
                        <span className={styles.userCity}>{"user.location.city"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

