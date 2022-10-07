import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectBalance } from './balanceSlice'

export function Balance() {
  const balance = useAppSelector(selectBalance)

  return (
    <div>
      <h1>Balance</h1>
      <p>${balance}</p>
    </div>
  )
} 
