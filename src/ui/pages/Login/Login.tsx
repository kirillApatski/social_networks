import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {requiredFiled} from "../../../utils/validators/validators";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../../bll/redax/authReducer";
import {AppStateType} from "../../../bll/redax/redux-store";
import {Redirect} from "react-router-dom";
import Input from "../../components/Input/Input";
import {Button} from "../../components/Button/Button";
import {UiWrapper} from "../../styles/Wrapper";
import {useFormik} from "formik";
import * as Yup from "yup";

export const Login = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector<AppStateType>(state => state.auth.isAuth)
    const onSubmit = (formData: FromDataType) => {
        dispatch(loginTC(formData))
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h3 style={{fontSize: '50px'}}>LOGIN</h3>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};

export type FromDataType = {
    email: string
    password: string
    rememberMe: boolean
}
type LoginFormType = {
    onSubmit: (formData: FromDataType) => void
}
const LoginForm: FC<LoginFormType> = (props) => {
    const {
        handleChange,
        handleSubmit,
        values,
        errors,
        setFieldValue
    } = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false
        },
        validationSchema: Yup.object({
            email: Yup
                .string()
                .email("Invalid email format")
                .required("Mail is required"),
            password: Yup.string()
                .required()
                .min(6),
        }),
        onSubmit: (values) => {
            props.onSubmit(values)
        }
    });
    return (
        <form onSubmit={handleSubmit}>
            <UiWrapper flexDirection={"column"}>
                <Input
                    placeholder={"Login"}
                    name={"email"}
                    value={values.email}
                    onChange={handleChange}
                    required
                />
                <Input
                    placeholder={"password"}
                    name={"password"}
                    type={'password'}
                    value={values.password}
                    onChange={handleChange}
                    required
                />
                <Input
                    type={"checkbox"}
                    name={"rememberMe"}
                    checked={values.rememberMe}
                    onChange={(event) => setFieldValue("rememberMe", event.target.checked)}
                /> remember me
                <Button label="login" type={"submit"}>Login</Button>
            </UiWrapper>
        </form>
    )
}
