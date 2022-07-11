import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

const initialState = {
  comments: [],
  isLoading: true,
};

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (id) => {
    try {
      const { data } = await axios.get(`/posts/${id}/comments`);

      return data;
    } catch (e) {
      console.log(e, 'error');
    }
  }
);

export const fetchAddComments = createAsyncThunk(
  'comments/fetchAddComments',
  async ({ id, comment }) => {
    try {
      const { data } = await axios.post(`posts/${id}/add-comment`, {
        text: comment,
      });

      return data;
    } catch (e) {
      console.log(e, 'error');
    }
  }
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchComments.pending]: (state) => {
      state.comments = [];
      state.isLoading = true;
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.comments = action.payload;
      state.isLoading = false;
    },
    [fetchComments.rejected]: (state) => {
      state.comments = [];
      state.isLoading = false;
    },
    [fetchAddComments.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchAddComments.fulfilled]: (state, action) => {
      state.comments = [...state.comments, action.payload];
      state.isLoading = false;
    },
    [fetchAddComments.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const commentsReducer = commentsSlice.reducer;
