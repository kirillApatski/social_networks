import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";
import {InputStyled} from "./InputStyled";

export type TDefaultInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>;
export type TInputProps = TDefaultInputProps & {
    error?: string;
    ref?: string;
};

const Input: React.FC<TInputProps> = ({...props}) => {
     const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange && props.onChange(e);
    };
    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        props.onBlur && props.onBlur(e);
    };
    const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        props.onKeyUp && props.onKeyUp(e);
    };

    return (
            <InputStyled
                placeholder={props.placeholder || ""}
                type={props.type}
                isError={!!props.error}
                onChange={onChange}
                onKeyUp={onKeyUp}
                name={props.name}
                value={props.value}
                onBlur={onBlur}
                onError={props.onError}
            />
    );
};

export default Input;
