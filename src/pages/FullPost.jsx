import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { Skeleton } from 'antd';

import Post from '../components/Post';
import AddComment from '../components/AddComment';
import CommentsBlock from '../components/CommentsBlock';
import axios from '../axios';
import { fetchComments } from '../redux/slices/comments';

export const FullPost = () => {
  const params = useParams();
  const [post, setPost] = useState();
  const [isLoading, setLoading] = useState(true);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`/posts/${params.id}`).then((res) => {
      setPost(res.data);
      setLoading(false);
    });

    dispatch(fetchComments(params.id));
  }, []);

  return (
    <>
      <Post
        {...post}
        isFullPost
        isEditable={user?._id === post?.user?._id}
        isLoading={isLoading}
      >
        <ReactMarkdown>{post?.text}</ReactMarkdown>
      </Post>
      <Skeleton loading={isLoading}>
        <CommentsBlock isLoading={false}>
          <AddComment user={user} />
        </CommentsBlock>
      </Skeleton>
    </>
  );
};
