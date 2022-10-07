import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectBalance, deposit, withdraw } from './balanceSlice'

export function Balance() {
  const dispatch = useAppDispatch();

  const balance = useAppSelector(selectBalance)
  const [transactionAmount, setTransActionAmount] = useState('0')
  const transactionValue = Number(transactionAmount) || 0
  return (
    <div>
      <h1>Balance</h1>
      <p>${balance}</p>

      <input 
        value={transactionAmount}
        onChange={(e) => setTransActionAmount(e.target.value)}
      />

      <button onClick={() => dispatch(deposit(transactionValue))}>
        Deposit
      </button>
      <button onClick={() => dispatch(withdraw(transactionValue))}>
        Withdraw
      </button>
    </div>
  )
} 
