import { createAsyncThunk } from '@reduxjs/toolkit';

import { commentActionTypes } from './commentActionTypes';
import { postService } from '../../../services/post.service';

export const commentActions = {
  fetchComments: createAsyncThunk(
    commentActionTypes.GET_COMMENT,
    async (id) => {
      try {
        const { data } = await postService.getComments(id);

        return data;
      } catch (e) {
        console.log(e, 'error');
      }
    }
  ),

  fetchAddComments: createAsyncThunk(
    commentActionTypes.ADD_COMMENT,
    async ({ id, comment }) => {
      try {
        const { data } = await postService.createComment(id, comment);

        return data;
      } catch (e) {
        console.log(e, 'error');
      }
    }
  ),
};
