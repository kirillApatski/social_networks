import React from 'react';
import styles from "./Users.module.css";
import {userType} from "../../../redax/usersReducer";
import {User} from "./User";

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
                props.users.map(user => <User
                    key={user.id}
                    user={user}
                    followingProgress={props.followingProgress}
                    follow={props.follow}
                    unfollow={props.unfollow}
                />)
            }
        </div>
    );
};

