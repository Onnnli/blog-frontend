import { createAsyncThunk } from '@reduxjs/toolkit';
import { postActionTypes } from './postActionTypes';
import { postService } from '../../../services/post.service';

export const postActions = {
  fetchPosts: createAsyncThunk(postActionTypes.GET_POSTS, async () => {
    try {
      const { data } = await postService.getAllPosts();

      return data;
    } catch (e) {
      console.log(e, 'error');
    }
  }),
  fetchPostsByTag: createAsyncThunk(
    postActionTypes.GET_POSTS_BY_TAG,
    async (id) => {
      try {
        const { data } = await postService.getPostsByTag(id);

        return data;
      } catch (e) {
        console.log(e, 'error');
      }
    }
  ),
  fetchPopularPosts: createAsyncThunk(
    postActionTypes.GET_POPULAR_POST,
    async () => {
      try {
        const { data } = await postService.getPostsPopular();

        return data;
      } catch (e) {
        console.log(e, 'error');
      }
    }
  ),
  fetchRemovePost: createAsyncThunk(
    postActionTypes.REMOVE_POST,
    // eslint-disable-next-line no-return-await
    async (id) => await postService.deletePost(id)
  ),
  fetchTags: createAsyncThunk(postActionTypes.GET_TAGS, async () => {
    try {
      const { data } = await postService.getTags();

      return data;
    } catch (e) {
      console.log(e, 'error');
    }
  }),
};
