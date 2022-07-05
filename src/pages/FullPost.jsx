import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Post from '../components/Post';
import AddComment from '../components/AddComment';
import CommentsBlock from '../components/CommentsBlock';
import axios from '../axios';

export const FullPost = () => {
  const params = useParams();
  const [post, setPost] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/posts/${params.id}`).then((res) => {
      setPost(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Post {...post} isFullPost isEditable isLoading={isLoading}>
        <p>{post?.text}</p>
      </Post>
      <CommentsBlock
        items={[
          {
            user: {
              fullName: 'Вася Пупкин',
              avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
            },
            text: 'Это тестовый комментарий 555555',
          },
          {
            user: {
              fullName: 'Иван Иванов',
              avatarUrl: 'https://mui.com/static/images/avatar/2.jpg',
            },
            text: 'When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top',
          },
        ]}
        isLoading={false}
      >
        <AddComment />
      </CommentsBlock>
    </>
  );
};
