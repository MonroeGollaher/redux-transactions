import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import balanceReducer from '../features/Balance/slice';

export const store = configureStore({
  reducer: {
    balance: balanceReducer
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
