import React, { FC } from "react";
import {AvatarStyled} from "./AvatarStyled";


type TAvatarProps = {
    img: string;
    size?: "large" | "small" | "smallest";
};

export const Avatar: FC<TAvatarProps> = ({size, img, ...props}) => {


    return (
        <AvatarStyled size={size} img={img}/>
    );
};