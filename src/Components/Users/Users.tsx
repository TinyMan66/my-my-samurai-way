import React from 'react';
import {UserType} from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

export const Users: React.FC<UsersPropsType> = (props) => {
    return (
        <div>
            <Paginator totalItemsCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       onPageChange={props.onPageChange}
                       currentPage={props.currentPage}
                       portionSize={10}
            />
            {
                props.users.map(u => <User key={u.id} user={u}
                                           followingInProgress={props.followingInProgress}
                                           follow={props.follow}
                                           unfollow={props.unfollow}
                />)
            }
        </div>
    )
}

// types
type UsersPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    follow: (id: number) => void
    unfollow: (id: number) => void
    onPageChange: (pageNumber: number) => void
    followingInProgress: number[]
}