import React from 'react';
import {userType} from "../../../bll/redax/usersReducer";
import {User} from "./User";
import {UiWrapper} from "../../styles/Wrapper";

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
        <UiWrapper flexDirection={"column"}
        width={"100%"}>
            <div>
                {pages.slice(0, 20).map(page => <span key={page}
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
        </UiWrapper>
    );
};

