import { createAsyncThunk } from '@reduxjs/toolkit';
import { authActionTypes } from './authActionTypes';
import { authService } from '../../../services/auth.service';

export const authActions = {
  fetchLogin: createAsyncThunk(authActionTypes.LOGIN, async (params) => {
    try {
      const { data } = await authService.login(params);

      return data;
    } catch (e) {
      console.log(e, 'error');
    }
  }),
  fetchUser: createAsyncThunk(authActionTypes.GET_USER, async () => {
    try {
      const { data } = await authService.getUser();

      return data;
    } catch (e) {
      console.log(e, 'error');
    }
  }),
  fetchRegistration: createAsyncThunk(
    authActionTypes.REGISTRATION,
    async (params) => {
      try {
        const { data } = await authService.registration(params);

        return data;
      } catch (e) {
        console.log(e, 'error');
      }
    }
  ),
};
