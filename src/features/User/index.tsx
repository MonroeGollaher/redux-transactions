import React from 'react'
import { useAppSelector } from '../../app/hooks'

import styles from "./index.module.css"
import { selectUserInfo } from './slice'

export function UserInfo() {
  const user = useAppSelector(selectUserInfo)
  const { firstName, lastName } = user

  const date = new Date()
  const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  
  return (
    <section className={styles.component}>
      <h1>Transaction History</h1>
      <div className={styles.row}>
        <h2>
          Savings Account -- 
          <span> {firstName} {lastName} </span>
          <span>{formattedDate}</span>
        </h2>
      </div>
    </section>
  )
}

