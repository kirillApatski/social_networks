import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/Textarea";
import {requiredFiled} from "../../utils/validators/validators";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../redax/authReducer";
import {AppStateType} from "../../redax/redux-store";
import {Redirect} from "react-router-dom";

export const Login = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector<AppStateType>(state => state.auth.isAuth)
    const onSubmit = (formData:FromDataType) => {
        dispatch(loginTC(formData))
    }
    if(isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h3 style={{fontSize: '50px'}}>LOGIN</h3>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export type FromDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: FC<InjectedFormProps<FromDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} name={"email"} component={Input} validate={[requiredFiled]}/>
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} type={'password'} component={Input} validate={[requiredFiled]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
            </div>
            {props.error && <div style={{color: 'red'}}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FromDataType>({form: 'login'})(LoginForm)

