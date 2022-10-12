import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface ChargeProps {
  name: string
  date: string
  amount: number
  type: string
}

export interface ChargesState {
  charges: Array<ChargeProps>;
}

const initialState: ChargesState = {
  charges: [
    {
      name: "Paycheck",
      date: "09/05/2022",
      amount: 1650.00,
      type: "deposit"
    },
    {
      name: "Netflix",
      date: "09/06/2022",
      amount: -12.99,
      type: "withdrawal"
    },
    {
      name: "Spotify",
      date: "09/03/2022",
      amount: -10.99,
      type: "withdrawal"
    },
    {
      name: "Rent",
      date: "09/04/2022",
      amount: -1100.00,
      type: "withdrawal"
    },
    {
      name: "Side hustle",
      date: "09/06/2022",
      amount: 50.00,
      type: "deposit"
    },
    {
      name: "Venmo",
      date: "09/06/2022",
      amount: 50.00,
      type: "deposit"
    }
  ]
};

export const chargesSlice = createSlice({
  name: 'charges',
  initialState,
  reducers: {
    setCharges: (state, action: PayloadAction<Array<ChargeProps>>) => {
      // state.charges += action.payload;
    },
  },
});

export const { setCharges } = chargesSlice.actions;

export const selectCharges = (state: RootState) => state.charges.charges;

export default chargesSlice.reducer;
