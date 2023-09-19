import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../models/user';

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: IUser | undefined
}

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  user: undefined
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, {payload}) => {
      state.isAuthenticated = true;
      state.user = payload
    },
    logout: (state, {payload}) => {
      state.isAuthenticated = false;
      state.user = undefined
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    finishLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { loginSuccess, logout, startLoading, finishLoading } = authSlice.actions;

export default authSlice.reducer;