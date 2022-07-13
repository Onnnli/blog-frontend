import axios from '../axios';

export const postService = {
  getAllPosts: () => axios.get('/posts'),
  getPostsByTag: (tag) => axios.get(`/tags/${tag}`),
  getPostsPopular: () => axios.get('/posts/popular'),
  deletePost: (id) => axios.delete(`/posts/${id}`),
  getTags: () => axios.get('/posts/tags'),
  getComments: (id) => axios.get(`/posts/${id}/comments`),
  createComment: (id, text) =>
    axios.post(`posts/${id}/add-comment`, {
      text,
    }),
};
