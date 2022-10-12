import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface UserInfoProps {
  firstName: string
  lastName: string
}

export interface UserInfoState {
  user: UserInfoProps
}

const initialState: UserInfoState = {
  user: {
    firstName: "Jane",
    lastName: "Doe",
  }
};

export const userInfoSlice = createSlice({
  name: 'charges',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserInfoProps>) => {
      //TODO 
    },
  },
});

export const { updateUser } = userInfoSlice.actions;

export const selectUserInfo = (state: RootState) => state.userInfo.user;

export default userInfoSlice.reducer;
