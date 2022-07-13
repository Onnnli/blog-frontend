import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './slices/postSlice/posts';
import { authReducer } from './slices/authSlice/auth';
import { commentsReducer } from './slices/commentSlice/comments';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    comments: commentsReducer,
  },
});

export default store;
