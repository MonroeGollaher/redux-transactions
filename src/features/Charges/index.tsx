import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectSearch } from '../Search/slice'
import styles from "./index.module.css"
import { selectCharges } from './slice'

export function Charges()  {

  const searchValue = useAppSelector(selectSearch)
  const charges = useAppSelector(selectCharges).filter(c => c.name.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <ul className={styles.component}>
      {charges.map(({ amount, date, name, type }, i) => (
        <li  key={i} id={`${type}-${i}`}>
          <h3>{name}</h3>
          <p>{date}</p>
          <p className={type === "deposit" ? styles.deposit : styles.withdrawal }>${amount}</p>
        </li>
      ))}
    </ul>
  )
}

