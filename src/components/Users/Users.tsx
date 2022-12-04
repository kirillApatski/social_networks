import React from 'react';
import styles from "./Users.module.css";
import {userType} from "../../redax/usersReducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    usersTotalCount: number
    pagesSize: number
    currentPage: number
    onChangePages: (page: number) => void
    users: Array<userType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    followingProgress: Array<number>
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.usersTotalCount / props.pagesSize)
    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.slice(0, 20).map(page => <span key={page}
                                                      className={props.currentPage === page ? styles.selectedPage : ""}
                                                      onClick={() => {
                                                          props.onChangePages(page)
                                                      }}>{page}</span>)}
            </div>
            {
                props.users.map(user => {
                    return (
                        <div className={styles.userWrapper} key={user.id}>
                            <div className={styles.userAvatar}>
                                <NavLink to={`/profile/` + user.id}>
                                    <img
                                        src={user.photos.small !== null ? user.photos.small : "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=170667a&w=0&h=Ct4e1kIOdCOrEgvsQg4A1qeuQv944pPFORUQcaGw4oI="}
                                        alt="avatar"/>
                                </NavLink>


                                {
                                    user.followed
                                        ? <button disabled={props.followingProgress.some(id => id === user.id)}
                                                  onClick={() => {
                                                      props.unfollow(user.id)
                                                  }

                                                  }>UnFollow</button>

                                        : <button disabled={props.followingProgress.some(id => id === user.id)}
                                                  onClick={() => {
                                                      props.follow(user.id)
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
                    )
                })
            }
        </div>
    );
};

