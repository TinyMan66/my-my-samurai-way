import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

type PathParamsType = {
    userId: string | undefined
}

type mapStatePropsType = {
    profile: ProfileType
}
type mapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type ProfileContainerPropsType = mapStatePropsType & mapDispatchPropsType;

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType;

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = "2";
        }

        usersAPI.getUserProfile(userId)
            .then(data => {
                this.props.setUserProfile(data)
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => ({
    profile: state.profilePage.profile
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);