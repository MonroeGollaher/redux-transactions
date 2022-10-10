import React from 'react'
import { CHARGES } from '../../stubs/charges'
import styles from "./index.module.css"

export function Charges()  {

  return (
    <ul className={styles.component}>
      {CHARGES.map(({ amount, date, name, type }, i) => (
        <li  key={i} id={`${type}-${i}`}>
          <h3>{name}</h3>
          <p>{date}</p>
          <p className={type === "deposit" ? styles.deposit : styles.withdrawal }>${amount}</p>
        </li>
      ))}
    </ul>
  )
}

