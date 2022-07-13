import { createSlice } from '@reduxjs/toolkit';
import { authActions } from './authActions';

const initialState = {
  user: null,
  isLoading: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isLoading = false;
    },
  },
  extraReducers: {
    // login
    [authActions.fetchLogin.pending]: (state) => {
      state.user = [];
      state.isLoading = true;
    },
    [authActions.fetchLogin.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    [authActions.fetchLogin.rejected]: (state) => {
      state.user = [];
      state.isLoading = false;
    },
    // get user
    [authActions.fetchUser.pending]: (state) => {
      state.user = [];
      state.isLoading = true;
    },
    [authActions.fetchUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    [authActions.fetchUser.rejected]: (state) => {
      state.user = [];
      state.isLoading = false;
    },
    // registration
    [authActions.fetchRegistration.pending]: (state) => {
      state.user = [];
      state.isLoading = true;
    },
    [authActions.fetchRegistration.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    [authActions.fetchRegistration.rejected]: (state) => {
      state.user = [];
      state.isLoading = false;
    },
  },
});

export const selectIsAuth = (state) => Boolean(state.auth?.user);
export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
