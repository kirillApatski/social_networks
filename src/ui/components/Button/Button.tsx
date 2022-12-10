import React, { DetailedHTMLProps, FC } from "react";
import {ButtonStyled} from "./ButtonStyled";

export type TDefaultHTMLButton = DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
    >;

type TButtonProps = TDefaultHTMLButton & {
    label: string;
    isDisabled?: boolean;
    backgroundColor?: string;
    size?: "lg" | "sm";
    isLoading?: boolean;
    icon?: React.ReactElement;
    needAuth?: boolean;
    withShadow?: boolean;
    withBorder?: boolean;
    severity?: "success" | "neutral";
};

export const Button: FC<TButtonProps> = ({ isDisabled, ...props }) => {
    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        props.onClick && props.onClick(e);
    };
    return (
        <ButtonStyled
            type={props.type}
            disabled={isDisabled}
            onClick={(e) => onClickHandler(e)}
            backgroundColor={props.backgroundColor}
            size={props.size}
            isLoading={props.isLoading}
            withShadow={props.withShadow}
            withBorder={props.withBorder}
            severity={props.severity}
        >
            {props.children}

        </ButtonStyled>
    );
};

