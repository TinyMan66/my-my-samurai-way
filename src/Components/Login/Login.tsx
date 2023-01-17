import React from 'react'
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/store";
import style from "../common/FormsControls/FormsControls.module.css"

const mapStateToProps = (state: AppStateType): mapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
})

const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginReduxFormPropsType> & LoginReduxFormPropsType> = ({handleSubmit, error, captcha}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type: "password"})}
            {createField(undefined, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}

            {captcha && <img src={captcha} alt={'captcha symbols'}/>}
            {captcha && createField("Symbols from image", "captcha", [required], Input, {})}

            {error && <div className={style.formSummaryError}>{error}</div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType, LoginReduxFormPropsType>({form: 'login'})(LoginForm)

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha}/>
    </div>
}

export default connect(mapStateToProps, {loginTC})(Login)

// types
type FormDataType = {
    email: string | null
    password: string | null
    rememberMe: boolean
    captcha: string | null
}
type mapStatePropsType = {
    isAuth: boolean,
    captcha: string | null
}
type mapDispatchPropsType = {
    loginTC: (email: string | null, password: string | null, rememberMe: boolean, captcha: string | null) => void
}
type LoginPropsType = mapStatePropsType & mapDispatchPropsType
type LoginReduxFormPropsType = { captcha: string | null }