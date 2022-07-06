import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

const initialState = {
  user: null,
  isLoading: true,
};

export const fetchLogin = createAsyncThunk(
  'auth/fetchLogin',
  async (params) => {
    try {
      const { data } = await axios.post('/login', params);

      return data;
    } catch (e) {
      console.log(e, 'error');
    }
  }
);

export const fetchUser = createAsyncThunk('auth/fetchUser', async () => {
  try {
    const { data } = await axios.get('/user');

    return data;
  } catch (e) {
    console.log(e, 'error');
  }
});

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
    [fetchLogin.pending]: (state) => {
      state.user = [];
      state.isLoading = true;
    },
    [fetchLogin.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    [fetchLogin.rejected]: (state) => {
      state.user = [];
      state.isLoading = false;
    },
    [fetchUser.pending]: (state) => {
      state.user = [];
      state.isLoading = true;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    [fetchUser.rejected]: (state) => {
      state.user = [];
      state.isLoading = false;
    },
  },
});

export const selectIsAuth = (state) => Boolean(state.auth?.user);
export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
