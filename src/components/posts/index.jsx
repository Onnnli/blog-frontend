import React from 'react';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';

import Post from '../Post';
import Sider from '../Sider';
import Tags from '../Tags';

const Posts = ({ posts, tags, isLoadingPosts }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Layout>
      <Layout.Content>
        {isLoadingPosts
          ? [...Array(5)]?.map((_, index) => (
              <Post key={index} isLoading={isLoadingPosts} />
            ))
          : posts?.map((post, index) => (
              <Post
                key={index}
                {...post}
                commentsCount={post?.comments?.length}
                isEditable={user?._id === post?.user?._id}
              />
            ))}
      </Layout.Content>
      <Sider theme="light">
        <Tags items={tags} />
      </Sider>
    </Layout>
  );
};

export default Posts;
