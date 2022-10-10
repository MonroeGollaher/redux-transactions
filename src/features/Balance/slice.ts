import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface BalanceState {
  balance: number;
}

const initialState: BalanceState = {
  balance: 0,
};

export const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    deposit: (state, action: PayloadAction<number>) => {
      state.balance += action.payload;
    },
    withdraw: (state, action: PayloadAction<number>) => {
      state.balance -= action.payload;
    },
  },
 
});

export const { deposit, withdraw } = balanceSlice.actions;

export const selectBalance = (state: RootState) => state.balance.balance;

export default balanceSlice.reducer;
