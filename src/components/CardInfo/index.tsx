import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

import styles from './CardInfo.module.css'
import APIGetUserInfo from "../../api/APIGetUserInfo";
import { UserRes, UsersType } from '../UserType'

const Index: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [userInfo, setUserInfo] = useState<UsersType>()

    useEffect(() => {
        APIGetUserInfo(id)
            .then((res: UserRes) => setUserInfo(res.data))
            .catch(err => console.log(err))
    })

    console.log(userInfo)

    
    if (userInfo) return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.name}>- name: {userInfo?.name}</div>
                <div className={styles.username}>- username: {userInfo?.username}</div>
                <div className={styles.email}>- email: {userInfo?.email}</div>
                <div className={styles.phone}>- phone: {userInfo?.phone}</div>
                <div className={styles.company}>- company: {userInfo?.company?.name}</div>
                <div className={styles.website}>- website: {userInfo?.website}</div>
                <div className={styles.address}> - address:
                    <li>street: {userInfo?.address?.street} </li>
                    <li>suite: {userInfo?.address?.suite} </li>
                    <li>city: {userInfo?.address?.city}</li>
                    <li>zipcode: {userInfo?.address?.zipcode}</li>
                </div>
            </div>
        </div>
    )

    else return (<div className={styles.container}>Loading...</div>)
}

export default Index;