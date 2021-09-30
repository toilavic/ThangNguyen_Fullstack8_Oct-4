import React, { useState, useEffect } from "react";
import { UserRes, UsersType } from './UserType'
import { History, LocationState } from "history";

import styles from './Main.module.css'

import APIGetUsers from "../api/APIGetUsers";

import Card from './Card'

interface Props {
  history: History<LocationState>
}

const Main: React.FC<Props> = ({
  history
}) => {

  const [users, setUsers]: Array<any> = useState([])

  useEffect(() => {
    APIGetUsers()
      .then((res: UserRes) => setUsers(res.data))
      .catch((err) => console.log(err))
  })

  const seeMoreDetail: any = (id: number) => {
    history.push(`/${id}`)
  }

  const CardItems = users.map((e: UsersType, i: number) => {
    return (

      <React.Fragment key={i}>
        <Card name={e.name}
          nickname={e.username}
          website={e.website}
          id={e.id}
          seeMoreDetail={seeMoreDetail}
        />
      </React.Fragment>
    )
  })

  return (
    <div className={styles.container}>
      {CardItems}
    </div>
  )
}

export default Main;