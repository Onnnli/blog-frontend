import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../axios';
import { postActionTypes } from './postActionTypes';

const initialState = {
  posts: {
    items: [],
    isLoading: false,
  },
  tags: {
    items: [],
    isLoading: false,
  },
};

export const fetchPosts = createAsyncThunk(
  postActionTypes.GET_POSTS,
  async () => {
    try {
      const { data } = await axios.get('/posts');

      return data;
    } catch (e) {
      console.log(e, 'error');
    }
  }
);
export const fetchPostsByTag = createAsyncThunk(
  postActionTypes.GET_POSTS_BY_TAG,
  async (id) => {
    try {
      const { data } = await axios.get(`/tags/${id}`);

      return data;
    } catch (e) {
      console.log(e, 'error');
    }
  }
);

export const fetchPopularPosts = createAsyncThunk(
  postActionTypes.GET_POPULAR_POST,
  async () => {
    try {
      const { data } = await axios.get('/posts/popular');

      return data;
    } catch (e) {
      console.log(e, 'error');
    }
  }
);

export const fetchRemovePost = createAsyncThunk(
  postActionTypes.REMOVE_POST,
  // eslint-disable-next-line no-return-await
  async (id) => await axios.delete(`/posts/${id}`)
);

export const fetchTags = createAsyncThunk(
  postActionTypes.GET_TAGS,
  async () => {
    try {
      const { data } = await axios.get('/posts/tags');

      return data;
    } catch (e) {
      console.log(e, 'error');
    }
  }
);

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
    [fetchPostsByTag.pending]: (state) => {
      state.posts.items = [];
      state.posts.isLoading = true;
    },
    [fetchPostsByTag.fulfilled]: (state, action) => {
      state.posts.items = action.payload;
      state.posts.isLoading = false;
    },
    [fetchPostsByTag.rejected]: (state) => {
      state.posts.items = [];
      state.posts.isLoading = false;
    },
    [fetchPopularPosts.pending]: (state) => {
      state.posts.items = [];
      state.posts.isLoading = true;
    },
    [fetchPopularPosts.fulfilled]: (state, action) => {
      state.posts.items = action.payload;
      state.posts.isLoading = false;
    },
    [fetchPopularPosts.rejected]: (state) => {
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
