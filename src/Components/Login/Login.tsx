import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import style from "../common/FormsControls/FormsControls.module.css"

const mapStateToProps = (state: AppStateType): mapStatePropsType => ({
    isAuth: state.auth.isAuth
})

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} validate={[required]} component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"} validate={[required]} component={Input}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"}/> Remember me
            </div>
            {props.error && <div className={style.formSummaryError}>{props.error}</div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
        props.loginTC(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default connect(mapStateToProps, {loginTC})(Login)

// types
type FormDataType = {
    email: string | null
    password: string | null
    rememberMe: boolean
}
type mapStatePropsType = {
    isAuth: boolean
}

type mapDispatchPropsType = {
    loginTC: (email: string | null, password: string | null, rememberMe: boolean) => void
}

type LoginPropsType = mapStatePropsType & mapDispatchPropsType