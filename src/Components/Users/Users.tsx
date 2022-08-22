import React from 'react';
import styles from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";

export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    avatar: 'https://online.pubhtml5.com/ipnc/accountlogo.jpg',
                    followed: false,
                    fullName: 'Eliza',
                    status: 'I\'m not fine',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 2,
                    avatar: 'https://www.pngkit.com/png/detail/563-5631413_donnie-thornberry.png',
                    followed: true,
                    fullName: 'Donnie',
                    status: 'Looking for a job..',
                    location: {city: 'Vancouver', country: 'Canada'}
                },
                {
                    id: 3,
                    avatar: 'https://static.life.ru/posts/2018/08/1145040/108af72f8b30a38d26c2b21678759672.jpg',
                    followed: true,
                    fullName: 'Nigel',
                    status: 'I am a boss',
                    location: {city: 'Portland', country: 'USA'}
                }
            ]
        )
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.usersAvatar} src={u.avatar} alt={'user\'s avatar'}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}