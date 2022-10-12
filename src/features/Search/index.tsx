import React, { useState } from 'react'
import { useAppDispatch } from '../../app/hooks';
import styles from "./index.module.css"
import { setSearch } from './slice';

export function Search() {
  const dispatch = useAppDispatch();


  const [value, setValue] = useState()

  const handleChange = (event: any) => {
    const { target: { value } } = event
    setValue(value) 
  }

  return (
    <div className={styles.searchBox}>
      <div className={styles.searchField}>
        <input type="text" className={styles.input} placeholder="Search transactions" onChange={(e) => dispatch(setSearch(e.target.value))}/>
      </div>
      <div className={styles.selectWrapper}>
        <select className={styles.select} id="lang" onChange={(e) => handleChange(e)} value={value}>
          <option value="select">Select</option>
          <option value="Name">Name</option>
          <option value="Date">Date</option>
          <option value="Amount">Amount</option>
        </select>
      </div>
    </div>
  )
}