import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string | undefined
}

type mapStatePropsType = {
    profile: ProfileType
    isAuth: boolean
}
type mapDispatchPropsType = {
    getUserProfile: (userId: number) => void
}

type ProfileContainerPropsType = mapStatePropsType & mapDispatchPropsType;

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType;

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
             userId = '2';
        }

        !isNaN(+userId) && this.props.getUserProfile(+userId)
    }

    render() {
        if(!this.props.isAuth) {return <Redirect to={'/login'} />}

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);