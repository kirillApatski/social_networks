import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/Textarea";
import {requiredFiled} from "../../utils/validatots/validators";

export const Login = () => {
    const onSubmit = (formData:FromDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h3 style={{fontSize: '50px'}}>LOGIN</h3>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

type FromDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: FC<InjectedFormProps<FromDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} name={"login"} component={Input} validate={[requiredFiled]}/>
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} component={Input} validate={[requiredFiled]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FromDataType>({form: 'login'})(LoginForm)

