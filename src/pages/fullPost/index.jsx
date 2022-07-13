import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { Skeleton } from 'antd';

import Post from '../../components/posts/post';
import AddComment from '../../components/comments/addComment';
import Comments from '../../components/comments';
import axios from '../../axios';
import { commentActions } from '../../redux/slices/commentSlice/commentActions';

const FullPost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [post, setPost] = useState();
  const [isLoading, setLoading] = useState(true);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    axios.get(`/posts/${id}`).then((res) => {
      setPost(res.data);
      setLoading(false);
    });

    dispatch(commentActions.fetchComments(id));
  }, []);

  return (
    <>
      <Post
        {...post}
        commentsCount={post?.comments?.length}
        isFullPost
        isEditable={user?._id === post?.user?._id}
        isLoading={isLoading}
      >
        <ReactMarkdown>{post?.text}</ReactMarkdown>
      </Post>
      <Skeleton loading={isLoading}>
        <Comments isLoading={false}>
          <AddComment user={user} />
        </Comments>
      </Skeleton>
    </>
  );
};

export default FullPost;
