import { createAsyncThunk } from '@reduxjs/toolkit';
import { commentActionTypes } from './commentActionTypes';
import axios from '../../../axios';

export const commentActions = {
  fetchComments: createAsyncThunk(
    commentActionTypes.GET_COMMENT,
    async (id) => {
      try {
        const { data } = await axios.get(`/posts/${id}/comments`);

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
        const { data } = await axios.post(`posts/${id}/add-comment`, {
          text: comment,
        });

        return data;
      } catch (e) {
        console.log(e, 'error');
      }
    }
  ),
};
