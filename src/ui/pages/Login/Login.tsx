import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {loginTC} from "../../../bll/redax/authReducer";
import {Redirect} from "react-router-dom";
import Input from "../../components/Input/Input";
import {Button} from "../../components/Button/Button";
import {UiWrapper} from "../../styles/Wrapper";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useAppSelector} from "../../../hooks/hooks";

export const Login = () => {
    const dispatch = useDispatch()
    const isAuth = useAppSelector(state => state.auth.isAuth)
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
    captcha: string
}
type LoginFormType = {
    onSubmit: (formData: FromDataType) => void
}
const LoginForm: FC<LoginFormType> = (props) => {
    const captcha = useAppSelector(state => state.auth.captcha)
    const {
        handleChange,
        handleSubmit,
        values,
        setFieldValue
    } = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false,
            captcha: ""
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
            console.log(values)
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
            {captcha && (
                <UiWrapper justifyContent={"center"}>
                    <img style={{width: '200px', height: '100px'}} src={captcha} alt="captcha"/>
                    <Input
                        type={"text"}
                        name={"captcha"}
                        onChange={handleChange}
                        placeholder={"captcha"}
                    />
                </UiWrapper>
            )}
        </form>
    )
}
