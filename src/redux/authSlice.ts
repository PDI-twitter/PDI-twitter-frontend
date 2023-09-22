import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../models/user";
import { localStorageControl } from "../storage/localStorage";

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: IUser | undefined;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: true,
  user: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<IUser>) => {
      const user = action.payload;
      state.isAuthenticated = true;
      state.user = user;
      localStorageControl.setObject("user", user);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = undefined;
      localStorageControl.reset();
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    finishLoading: (state) => {
      state.isLoading = false;
    },
    verifyUserInLocalHost: (state) => {
      const user = localStorageControl.getObject("user");
      if (user) {
        state.user = user;
        state.isAuthenticated = true;
      }
      state.isLoading = false;
    },
  },
});

export const {
  loginSuccess,
  logout,
  startLoading,
  finishLoading,
  verifyUserInLocalHost,
} = authSlice.actions;

export default authSlice.reducer;
