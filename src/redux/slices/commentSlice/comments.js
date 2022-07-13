import { createSlice } from '@reduxjs/toolkit';
import { commentActions } from './commentActions';

const initialState = {
  comments: [],
  isLoading: true,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [commentActions.fetchComments.pending]: (state) => {
      state.comments = [];
      state.isLoading = true;
    },
    [commentActions.fetchComments.fulfilled]: (state, action) => {
      state.comments = action.payload;
      state.isLoading = false;
    },
    [commentActions.fetchComments.rejected]: (state) => {
      state.comments = [];
      state.isLoading = false;
    },
    [commentActions.fetchAddComments.pending]: (state) => {
      state.isLoading = true;
    },
    [commentActions.fetchAddComments.fulfilled]: (state, action) => {
      state.comments = [...state.comments, action.payload];
      state.isLoading = false;
    },
    [commentActions.fetchAddComments.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const commentsReducer = commentsSlice.reducer;
