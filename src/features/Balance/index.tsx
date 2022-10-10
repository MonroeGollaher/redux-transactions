import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectBalance, deposit, withdraw } from './slice'

import styles from "./index.module.css"

export function Balance() {
  const dispatch = useAppDispatch();

  const balance = useAppSelector(selectBalance)
  const [transactionAmount, setTransActionAmount] = useState('0')
  const transactionValue = Number(transactionAmount) || 0
  return (
    <div className={styles.component}>
      <div className={styles.balance}>
        <h2>Balance</h2>
        <p>${balance}</p>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => dispatch(deposit(transactionValue))}>
          Deposit
        </button>
        <button onClick={() => dispatch(withdraw(transactionValue))}>
          Withdraw
        </button>
        <input 
          value={transactionAmount}
          onChange={(e) => setTransActionAmount(e.target.value)}
        />
      </div>
    </div>
  )
} 
