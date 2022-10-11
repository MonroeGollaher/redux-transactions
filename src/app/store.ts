import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import balanceReducer from '../features/Balance/slice';
import searchReducer from '../features/Search//slice';
import chargeReducer from '../features/Charges/slice';

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    search: searchReducer,
    charges: chargeReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
