import React from 'react';
import {Header} from "./Header";
import {setAuthUserData} from "../../redux/auth-reducer";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type mapStatePropsType = {
    isAuth: boolean
    login: string
    // isFetching: boolean
}

type mapDispatchPropsType = {
    setAuthUserData: (userId: number, email: string, login: string) => void
}

export type AuthPropsType = mapStatePropsType & mapDispatchPropsType;

class HeaderContainer extends React.Component<AuthPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login)
                }
            });
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth}
                       login={this.props.login}
        />)
    }
}

const mapStateToProps =(state: AppStateType): mapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)