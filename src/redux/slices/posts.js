import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

const initialState = {
  posts: {
    items: [],
    isLoading: true,
  },
  tags: {
    items: [],
    isLoading: true,
  },
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const { data } = await axios.get('/posts');

    return data;
  } catch (e) {
    console.log(e, 'error');
  }
});

export const fetchRemovePost = createAsyncThunk(
  'posts/fetchRemovePost',
  // eslint-disable-next-line no-return-await
  async (id) => await axios.delete(`/posts/${id}`)
);

export const fetchTags = createAsyncThunk('posts/fetchTags', async () => {
  try {
    const { data } = await axios.get('/posts/tags');

    return data;
  } catch (e) {
    console.log(e, 'error');
  }
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.posts.items = [];
      state.posts.isLoading = true;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts.items = action.payload;
      state.posts.isLoading = false;
    },
    [fetchPosts.rejected]: (state) => {
      state.posts.items = [];
      state.posts.isLoading = false;
    },
    [fetchTags.pending]: (state) => {
      state.tags.items = [];
      state.tags.isLoading = true;
    },
    [fetchTags.fulfilled]: (state, action) => {
      state.tags.items = action.payload;
      state.tags.isLoading = false;
    },
    [fetchTags.rejected]: (state) => {
      state.tags.items = [];
      state.tags.isLoading = false;
    },
    [fetchRemovePost.fulfilled]: (state, action) => {
      state.posts.items = state.posts.items.filter(
        (post) => post._id !== action.meta.arg
      );
    },
  },
});

export const postsReducer = postsSlice.reducer;
