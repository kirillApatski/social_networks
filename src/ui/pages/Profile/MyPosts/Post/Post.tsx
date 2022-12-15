import React from "react";
import {PostsType} from "../../../../../bll/redax/profileReducer";
import {AvatarStyled} from "../../../../components/Avatar/AvatarStyled";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../../bll/redax/redux-store";
import {UiWrapper, Wrapper} from "../../../../styles/Wrapper";
import {TextStyled} from "../../../../components/Text/TextStyled";

type PostPropsType = {
    posts: PostsType[]
}


export const Post = (props: PostPropsType) => {
    const avatar = useSelector<AppStateType>(state => state.profilePages.profile?.photos.small)


    let postItem = props.posts.map(post => {
        return (
            <div key={post.id}>
                <UiWrapper
                           justifyContent={"space-between"}
                           alignItems={"center"}
                >
                    <Wrapper alignItems={"center"}>
                        <AvatarStyled
                            src={`${avatar}`}
                            alt="avatar"/>
                        {post.message}
                    </Wrapper>
                </UiWrapper>
                <TextStyled>Like: {post.likeCount}</TextStyled>
            </div>
        )
    })

    return (
        <>
            {postItem}
        </>
    )
}