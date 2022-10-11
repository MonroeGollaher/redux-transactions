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
    <>
      <div className={styles.component}>
        <div className={styles.buttonWrapper}>
          <button onClick={() => dispatch(deposit(transactionValue))}>
            Deposit
          </button>
          <button onClick={() => dispatch(withdraw(transactionValue))}>
            Withdraw
          </button>
        </div>
        <div className={styles.balance}>
          <h2>Balance</h2>
          <p>${balance}</p>
        </div>
      </div>
      <div className={styles.input}>
        <p>Enter withdrawal / transfer amount</p>
        <input 
          value={transactionAmount}
          onChange={(e) => setTransActionAmount(e.target.value)}
          />
      </div>
    </>
  )
} 
