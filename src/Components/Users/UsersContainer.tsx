import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {Users} from "./Users";
import {connect} from "react-redux";


type mapStatePropsType = {
    users: Array<UserType>
}

type mapDispatchPropsType = {
    follow: (id: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = mapStatePropsType & mapDispatchPropsType;

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users));
        }
    }
}

export const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (Users);