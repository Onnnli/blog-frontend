import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Posts from '../../components/posts';
import { fetchPostsByTag } from '../../redux/slices/posts';

const PostsByTag = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { posts, tags } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPostsByTag(id));
  }, [id]);

  return (
    <Posts
      posts={posts.items}
      tags={tags.items}
      isLoadingPosts={posts.isLoading}
    />
  );
};

export default PostsByTag;
