import React, {FC} from 'react';
import {userType} from "../../../bll/redax/usersReducer";
import {NavLink} from "react-router-dom";
import {Button} from "../../components/Button/Button";
import {Avatar} from "../../components/Avatar/Avatar";
import {TextStyled} from "../../components/Text/TextStyled";
import {UiWrapper, Wrapper} from "../../styles/Wrapper";
type UserPropsType = {
    user: userType
    followingProgress: number[]
    follow: (id: number) => void
    unfollow: (id: number) => void
}



export const User: FC<UserPropsType> = ({user, followingProgress, follow, unfollow}) => {
    return (
            <UiWrapper key={user.id}
             alignItems={"center"}
            >
                <Wrapper flexDirection={"column"}>
                    <NavLink to={`/profile/` + user.id}>
                        <Avatar
                            size={"small"}
                            img={user.photos.small !== null ? user.photos.small : "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=170667a&w=0&h=Ct4e1kIOdCOrEgvsQg4A1qeuQv944pPFORUQcaGw4oI="}
                            />
                    </NavLink>


                    {
                        user.followed
                            ? <Button isDisabled={followingProgress.some(id => id === user.id)}
                                      label={"UnFollow"}
                                      onClick={() => unfollow(user.id)
                                      }
                            >UnFollow</Button>

                            : <Button isDisabled={followingProgress.some(id => id === user.id)}
                                      label={"Follow"}

                                      onClick={() => follow(user.id)
                                      }
                            >Follow</Button>
                    }
                </Wrapper>
                <UiWrapper flexDirection={"column"}>
                    <Wrapper>
                        <TextStyled>Name: {user.name}</TextStyled>
                        <TextStyled>Status: {user.status ? user.status : "No status" }</TextStyled>
                    </Wrapper>
                        <TextStyled>Country: User country</TextStyled>
                        <TextStyled>City: User city</TextStyled>
                </UiWrapper>
            </UiWrapper>
    );
};

