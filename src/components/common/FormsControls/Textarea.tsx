import React from 'react';
import style from './FormsControls.module.css'




export const Textarea = ({input, meta, ...props}: any) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={hasError && style.error}>
            <textarea {...input} {...props}/>
            <div>
                {hasError && <span>Some Error</span>}
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