import React from 'react';
import {Header} from "./Header";
import {authUser} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type mapStatePropsType = {
    isAuth: boolean
    login: string
    // isFetching: boolean
}

type mapDispatchPropsType = {
    authUser: () => void
}

export type AuthPropsType = mapStatePropsType & mapDispatchPropsType;

class HeaderContainer extends React.Component<AuthPropsType> {

    componentDidMount() {
        this.props.authUser()
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth}
                    login={this.props.login}
            />)
    }
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login
    }
}

export default connect(mapStateToProps, {authUser})(HeaderContainer)