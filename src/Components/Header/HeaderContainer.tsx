import React from 'react';
import {Header} from "./Header";
import {getAuthUserData, logoutTC} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type mapStatePropsType = {
    isAuth: boolean
    login: string | null
    // isFetching: boolean
}

type mapDispatchPropsType = {
    getAuthUserData: () => void
    logoutTC: () => void
}

export type AuthPropsType = mapStatePropsType & mapDispatchPropsType;

class HeaderContainer extends React.Component<AuthPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth}
                    login={this.props.login}
                    logoutTC={this.props.logoutTC}
            />)
    }
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login
    }
}

export default connect(mapStateToProps, {getAuthUserData, logoutTC})(HeaderContainer)