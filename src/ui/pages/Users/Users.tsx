import React from 'react';
import {userType} from "../../../bll/redax/usersReducer";
import {User} from "./User";
import {UiWrapper} from "../../styles/Wrapper";
import {Pagination} from "../../components/Pagination/Pagination";

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
    console.log(props.pagesSize)
    return (
        <UiWrapper flexDirection={"column"}
                   width={"100%"}>
            <UiWrapper justifyContent={"center"}>
                <Pagination pageCount={props.pagesSize} totalCount={props.usersTotalCount}
                            onChangePages={props.onChangePages}/>
            </UiWrapper>
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

