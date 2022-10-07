import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface BalanceState {
  balance: number;
}

const initialState: BalanceState = {
  balance: 100,
};

export const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    increment: (state) => {
      state.balance += 1;
    },
    decrement: (state) => {
      state.balance -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.balance += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.balance += action.payload;
    },
  },
 
});

export const { increment, decrement, incrementByAmount, decrementByAmount } = balanceSlice.actions;

export const selectBalance = (state: RootState) => state.balance.balance;

export default balanceSlice.reducer;
