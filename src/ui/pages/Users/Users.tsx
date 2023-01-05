import React, {useEffect} from 'react';
import {follow, requestUsers, unfollow} from "../../../bll/redax/usersReducer";
import {User} from "./User";
import {UiWrapper} from "../../styles/Wrapper";
import {Pagination} from "../../components/Pagination/Pagination";
import {useAppSelector} from "../../../hooks/hooks";
import {useDispatch} from "react-redux";


export const Users = () => {
    const dispatch = useDispatch()
    const isFetching = useAppSelector(state => state.usersPages.isFetching)
    const users = useAppSelector(state => state.usersPages.users)
    const pagesSize = useAppSelector(state => state.usersPages.pagesSize)
    const usersTotalCount = useAppSelector(state => state.usersPages.usersTotalCount)
    const currentPage = useAppSelector(state => state.usersPages.currentPage)
    const followingProgress = useAppSelector(state => state.usersPages.followingProgress)

    const onChangePages = (page: number) => {
        dispatch(requestUsers(page, pagesSize))
    }

    const followHandler = (userID: number) => {
        dispatch(follow(userID))
    }
    const unfollowHandler = (userID: number) => {
        dispatch(unfollow(userID))
    }

    useEffect(() => {
        dispatch(requestUsers(currentPage, pagesSize))
    }, [])
    return (
        <UiWrapper flexDirection={"column"}
                   width={"100%"}>
            <UiWrapper justifyContent={"center"}>
                <Pagination pageCount={pagesSize} totalCount={usersTotalCount}
                            onChangePages={onChangePages}/>
            </UiWrapper>
            {
                users.map(user => <User
                    key={user.id}
                    user={user}
                    followingProgress={followingProgress}
                    follow={followHandler}
                    unfollow={unfollowHandler}
                />)
            }
        </UiWrapper>

    );
};

