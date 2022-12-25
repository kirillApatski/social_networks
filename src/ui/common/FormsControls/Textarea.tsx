import React, {ChangeEvent, FC} from 'react';
import style from './FormsControls.module.css'
import {TextareaStyled} from "../../components/Textarea/TextareaStyled";


type TextareaPropsType = {
    placeholder: string
    name: string
    value: string
    onChange: (e: ChangeEvent) => void
}


export const Textarea: FC<TextareaPropsType> = ({placeholder, name, value,onChange}) => {

    return (
        <div>
            <TextareaStyled placeholder={placeholder} name={name} value={value} onChange={onChange}/>
            <div>
                <span>Some Error</span>
            </div>
        </div>
    );
};


export const Input = ({input, meta, ...props}: any) => {

    const hasError = meta.touched && meta.error
    return (
        <div className={hasError ? style.error : ""}>
            <input {...input} {...props}/>
            <div>
                {hasError && <span>Some Error</span>}
            </div>
        </div>
    );
};