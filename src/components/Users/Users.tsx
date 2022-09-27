import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'
import axios from "axios";

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>

                {
                    this.props.users.map(user => {
                        return (
                            <div className={styles.userWrapper} key={user.id}>
                                <div className={styles.userAvatar}>
                                    <img
                                        src={user.photos.small !== null ? user.photos.small : "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=170667a&w=0&h=Ct4e1kIOdCOrEgvsQg4A1qeuQv944pPFORUQcaGw4oI="}
                                        alt="avatar"/>
                                    {
                                        user.followed
                                            ? <button onClick={() => this.props.follow(user.id)}>Follow</button>
                                            : <button onClick={() => this.props.unfollow(user.id)}>UnFollow</button>
                                    }
                                </div>
                                <div className={styles.userDescription}>
                                    <div className={styles.userNameAndStatus}>
                                        <span className={styles.userFullName}>{user.name}</span>
                                        <span className={styles.userStatus}>{user.status}</span>
                                    </div>
                                    <div className={styles.userCountryAndCity}>
                                        <span className={styles.userCountry}>{"user.location.country"}</span>
                                        <span className={styles.userCity}>{"user.location.city"}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
