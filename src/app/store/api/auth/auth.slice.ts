import { createSlice } from "@reduxjs/toolkit";
import { authApi } from './auth.api';
import { RootState } from '@/store/store';
import { IUser } from "@/types/user.types";

interface InitialState {
  user: IUser & { token: string} | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const initialState: InitialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.login.matchPending, (state) => {
        state.isLoading = true
      })
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addMatcher(authApi.endpoints.login.matchRejected, (state) => {
        state.isLoading = false
        state.user = null
        state.isAuthenticated = false;
      })

      .addMatcher(authApi.endpoints.register.matchPending, (state) => {
        state.isLoading = true
      })
      .addMatcher(authApi.endpoints.register.matchFulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addMatcher(authApi.endpoints.register.matchRejected, (state) => {
        state.isLoading = false
        state.user = null
        state.isAuthenticated = false;
      })

      .addMatcher(authApi.endpoints.current.matchPending, (state) => {
        state.isLoading = true
      })
      .addMatcher(authApi.endpoints.current.matchFulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addMatcher(authApi.endpoints.current.matchRejected, (state) => {
        state.isLoading = false
        state.user = null
        state.isAuthenticated = false;
      });
  },
});

export const {reducer} = authSlice
export const { logout } = authSlice.actions;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const selectUser = (state: RootState) =>
  state.auth.user;
